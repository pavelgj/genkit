# Genkit Python API Proposal

Open questions:

- what's the best way to handle async? Should genkit primitive be all sync/blocking and leave it up to the user to deal with concurrency? I see some GenAI libs offer dual API -- sync and async (ex. [openai](https://github.com/openai/openai-python?tab=readme-ov-file#async-usage), [langchain](https://python.langchain.com/docs/concepts/async/)).

## Init

```py
from genkit import Genkit
from genkit.vertexai import vertexAI, gemini

ai = Genkit(
    plugins=[vertexAI()],
    model=gemini("gemini-1.5-flash")
)
```

## Flows

Simplest flow:

```py
@ai.flow()
def sayHi():
    return "hi"
```

the flow name defaults to the function name, but can be overridden:

```py
@ai.flow(name="sayBye")
def sayHi():
    return "hi"
```

flows can take input:

```py
@ai.flow()
def sayHi(name: str):
    return f"hi {name}"
```

and can accept pydantic objects:

```py
from pydantic import BaseModel, Field

class TwoNumbers(BaseModel):
    a: int = Field(description="a field")
    b: int = Field(description="b field")

@ai.flow()
def sum_two_numbers(input: TwoNumbers):
    return input.a + input.b
```

Flows can be invoked as a function:

```py
print(sum_two_numbers(TwoNumbers(a=1, b=3)))
```

### Streaming

Flows can be streamed as well (WIP).

```py
from genkit import StreamCallback

@ai.flow()
def sayHi(input: str, sendChunk: StreamCallback[int]):
    sendChunk(1)
    sendChunk(2)
    sendChunk(3)
    return f'"hi {name}"

def handleChunk(chunk: int):
    print(chunk)

response = sayHi("Pavel", onChunk=handleChunk)

print(response)
```

using asyncio we can do something like this

```py
from genkit import StreamCallback

@ai.flow()
def sayHi(input: str, sendChunk: StreamCallback[int]):
    sendChunk(1)
    sendChunk(2)
    sendChunk(3)
    return f"hi {name}"

def handleChunk(chunk: int):
    print(chunk)

stream, response = streamFlow(sayHi, "Pavel")

for chunk in stream:
    print(chunk) # 1,2,3

print(await response) # hi Pavel
```


### Question: should we allow multiple named args for flows?

Ex:

```py
@ai.flow()
def sum_two_numbers(a: int, b: int):
    return input.a + input.b

print(sum_two_numbers(a=1, b=4))
```

The input schema of this flow would be an object with each arg as a field.

```ts
{
  a: number,
  b: number,
}
```

the downside of this approach is that we won't be able to use the second positional arg for things like streaming callback... alternativaly we can do some magic "type maching" -- if you define an arg of type `StreamCallback` we will inject the stream callback there.

```py
@ai.flow()
def sum_two_numbers(a: int, b: int, sendChunk: StreamCallback[int]):
    sendChunk(1)
    sendChunk(2)
    sendChunk(3)
    return input.a + input.b

print(sum_two_numbers(a=1, b=4, onChunk: handleChunk))
```

## Generate API

Simple generate call:

```py
from genkit import Genkit
from genkit.vertexai import vertexAI, gemini

ai = Genkit(
    plugins=[vertexAI()],
    model=gemini("gemini-1.5-flash")
)

response = ai.generate('hi') # prompt is first positional arg
# or can use named args
response = ai.generate(prompt='hi')

print(response.text)
```

system prompt:

```py
response = ai.generate(prompt='hi', system="talk like a pirate")
```

Explicitly pass a model:

```py
response = ai.generate('hi', model=gemini("gemini-1.5-flash"))
```

Pass messages:

```py
response = ai.generate([{
    "role": "user",
    "content": [{"text": "say hi"}]
}])
```

### Tools

```py
class WeatherToolInput(BaseModel):
    location: str = Field(description="location")
    date: str = Field(description="ISO format date")

@ai.tool()
def weather_tool(input: WeatherToolInput):
    return {"temperature_metric": 22, "humidity_percent": 61}

response = ai.generate("what's the weather today", tools=['weather_tool'])
```

### Streaming

using asyncio

```py
stream, response = ai.generateStream(prompt='hi')

for chunk in stream:
    print(chunk.text)

print(await response.text)
```


### Structured Output

Use pydantic to define data models:

```py
from pydantic import BaseModel, Field

class Role(Enum):
    paladin = 'paladin'
    wizard = 'wizard'
    ranger = 'ranger'
    tank = 'tank'
    healer = 'healer'

class Weapon(Enum):
    sword = 'sword'
    axe = 'axe'
    bow = 'bow'
    staff = 'staff'
    wand = 'wand'

class Chracter(BaseModel):
    name: str = Field(description="name of the character")
    background: str = Field(description="a short background story about the character")
    role: Role = Field(description="primary role")
    weapon: Weapon = Field(description="primary weapon")

response = ai.generate("generate an RPG character", output_schema=Chracter, format="json")

print(response.output)
```

## Prompts


```py
class TwoNumbers(BaseModel):
    a: int = Field(description="a field")
    b: int = Field(description="b field")

# dotprompt

ai.define_prompt(
    name="add_two_numbers",
    input_type=Schema[TwoNumbers],
    template="""
      add {{ a }} to {{ b }}
    """)

# functional prompt

def add_two_numbers(input: TwoNumbers):
    return GenerateRequest(
        messages=[
            Message(role="user", content=[
                TextPart(text=f"add {input.a} to {input.b}")
            ])
        ])

adder = ai.define_prompt(
    name="add_two_numbers",
    fn=add_two_numbers) # input_type will be inferred from fn
```

structured output:

```py
# see Chracter pydantic model definition above

class GeneratorInput(BaseModel):
    name: str = Field(description="name of the character")

generator = ai.define_prompt(
    name="character_generator",
    input_schema=GeneratorInput,
    output_schema=Chracter,
    format="json",
    template="""
      Generate an PRG game character named {{ name }}
    """)
```

calling the prompt:

```py
# (optional) can retrieve the prompt
adder = ai.prompt("add_two_numbers")

response = adder(TwoNumbers(a=1, b=3))

print(response.text)

# structured output:
response = generator(GeneratorInput(name="Glorb"))

print(response.output)

# streaming

stream, response = adder.stream(TwoNumbers(a=1, b=3))

for chunk in stream:
    print(chunk.text)

print((await response).text)
```

Alternative:

```py
class TwoNumbers(BaseModel):
    a: int = Field(description="a field")
    b: int = Field(description="b field")

# dotprompt

@ai.prompt()
def add_two_numbers(input: TwoNumbers):
    return """
    add {{ a }} to {{ b }}
    """

# functional prompt

@ai.prompt()
def add_two_numbers(input: TwoNumbers):
    return GenerateRequest(
        messages=[
            Message(role="user", content=[
                TextPart(text=f"add {input.a} to {input.b}")
            ])
        ])
```

structured output:

```py
# see Chracter pydantic model definition above

class GeneratorInput(BaseModel):
    name: str = Field(description="name of the character")

@ai.prompt(output_schema=Chracter, format="json")
def character_generator(input: GeneratorInput):
    return """
      Generate an PRG game character named {{ name }}
    """
```

calling the prompt:

```py
response = add_two_numbers(TwoNumbers(a=1, b=3))

print(response.text)

# streaming is tricky.......

stream, response = streamPrompt(add_two_numbers, TwoNumbers(a=1, b=3))

for chunk in stream:
    print(chunk.text)

print((await response).text)
```

Pros:
 - more declarative

Cons:
 - misleading function return type: that prompt can be called as a function, but the decortor will alter the return type of the function -- instead if returning whatever that function returns, it will return a `GenerateResponse`.

## Chat and Sessions

WIP
