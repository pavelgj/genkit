# Interface: \_\_RequestWithAuth

For express-based flows, req.auth should contain the value to bepassed into
the flow context.

## Extends

- `Request`

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| ~~`aborted`~~ | `public` | `boolean` | The `message.aborted` property will be `true` if the request has been aborted. **Since** v10.1.0 **Deprecated** Since v17.0.0,v16.12.0 - Check `message.destroyed` from <a href="stream.html#class-streamreadable" class="type">stream.Readable</a>. | `express.Request.aborted` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1180 |
| `accepted` | `public` | `MediaType`[] | Return an array of Accepted media types ordered from highest quality to lowest. | `express.Request.accepted` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:513 |
| `app` | `public` | `Application`\<`Record`\<`string`, `any`\>\> | - | `express.Request.app` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:659 |
| `auth?` | `public` | `unknown` | - | - | core/lib/flow.d.ts:40 |
| `baseUrl` | `public` | `string` | - | `express.Request.baseUrl` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:657 |
| `body` | `public` | `any` | - | `express.Request.body` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:638 |
| `closed` | `readonly` | `boolean` | Is `true` after `'close'` has been emitted. **Since** v18.0.0 | `express.Request.closed` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:126 |
| `complete` | `public` | `boolean` | The `message.complete` property will be `true` if a complete HTTP message has been received and successfully parsed. This property is particularly useful as a means of determining if a client or server fully transmitted a message before a connection was terminated: `const req = http.request({ host: '127.0.0.1', port: 8080, method: 'POST', }, (res) => { res.resume(); res.on('end', () => { if (!res.complete) console.error( 'The connection was terminated while the message was still being sent'); }); });` **Since** v0.3.0 | `express.Request.complete` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1215 |
| ~~`connection`~~ | `public` | `Socket` | Alias for `message.socket`. **Since** v0.1.90 **Deprecated** Since v16.0.0 - Use `socket`. | `express.Request.connection` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1221 |
| `cookies` | `public` | `any` | - | `express.Request.cookies` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:641 |
| `destroyed` | `public` | `boolean` | Is `true` after `readable.destroy()` has been called. **Since** v8.0.0 | `express.Request.destroyed` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:121 |
| `errored` | `readonly` | `null` \| `Error` | Returns error if the stream has been destroyed with an error. **Since** v18.0.0 | `express.Request.errored` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:131 |
| `fresh` | `public` | `boolean` | Check if the request is fresh, aka Last-Modified and/or the ETag still match. | `express.Request.fresh` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:623 |
| `headers` | `public` | `IncomingHttpHeaders` | The request/response headers object. Key-value pairs of header names and values. Header names are lower-cased. `// Prints something like: // // { 'user-agent': 'curl/7.22.0', // host: '127.0.0.1:8000', // accept: '*' } console.log(request.headers);` Duplicates in raw headers are handled in the following ways, depending on the header name: * Duplicates of `age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`, or `user-agent` are discarded. To allow duplicate values of the headers listed above to be joined, use the option `joinDuplicateHeaders` in request and createServer. See RFC 9110 Section 5.3 for more information. * `set-cookie` is always an array. Duplicates are added to the array. * For duplicate `cookie` headers, the values are joined together with `; `. * For all other headers, the values are joined together with `, `. **Since** v0.1.5 | `express.Request.headers` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1261 |
| `headersDistinct` | `public` | `Dict`\<`string`[]\> | Similar to `message.headers`, but there is no join logic and the values are always arrays of strings, even for headers received just once. `// Prints something like: // // { 'user-agent': ['curl/7.22.0'], // host: ['127.0.0.1:8000'], // accept: ['*'] } console.log(request.headersDistinct);` **Since** v18.3.0, v16.17.0 | `express.Request.headersDistinct` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1276 |
| ~~`host`~~ | `public` | `string` | **Deprecated** Use hostname instead. | `express.Request.host` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:616 |
| `hostname` | `public` | `string` | Parse the "Host" header field hostname. | `express.Request.hostname` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:611 |
| `httpVersion` | `public` | `string` | In case of server request, the HTTP version sent by the client. In the case of client response, the HTTP version of the connected-to server. Probably either `'1.1'` or `'1.0'`. Also `message.httpVersionMajor` is the first integer and `message.httpVersionMinor` is the second. **Since** v0.1.1 | `express.Request.httpVersion` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1189 |
| `httpVersionMajor` | `public` | `number` | - | `express.Request.httpVersionMajor` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1190 |
| `httpVersionMinor` | `public` | `number` | - | `express.Request.httpVersionMinor` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1191 |
| `ip` | `public` | `undefined` \| `string` | Return the remote address, or when "trust proxy" is `true` return the upstream addr. Value may be undefined if the `req.socket` is destroyed (for example, if the client disconnected). | `express.Request.ip` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:578 |
| `ips` | `public` | `string`[] | When "trust proxy" is `true`, parse the "X-Forwarded-For" ip address list. For example if the value were "client, proxy1, proxy2" you would receive the array `["client", "proxy1", "proxy2"]` where "proxy2" is the furthest down-stream. | `express.Request.ips` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:588 |
| `method` | `public` | `string` | **Only valid for request obtained from Server.** The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`. **Since** v0.1.1 | `express.Request.method` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:643 |
| `next?` | `public` | `NextFunction` | - | `express.Request.next` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:666 |
| `originalUrl` | `public` | `string` | - | `express.Request.originalUrl` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:653 |
| `params` | `public` | `ParamsDictionary` | - | `express.Request.params` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:645 |
| `path` | `public` | `string` | Short-hand for `url.parse(req.url).pathname`. | `express.Request.path` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:606 |
| `protocol` | `public` | `string` | Return the protocol string "http" or "https" when requested with TLS. When the "trust proxy" setting is enabled the "X-Forwarded-Proto" header field will be trusted. If you're running behind a reverse proxy that supplies https for you this may be enabled. | `express.Request.protocol` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:561 |
| `query` | `public` | `ParsedQs` | - | `express.Request.query` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:647 |
| `rawHeaders` | `public` | `string`[] | The raw request/response headers list exactly as they were received. The keys and values are in the same list. It is _not_ a list of tuples. So, the even-numbered offsets are key values, and the odd-numbered offsets are the associated values. Header names are not lowercased, and duplicates are not merged. `// Prints something like: // // [ 'user-agent', // 'this is invalid because there can be only one', // 'User-Agent', // 'curl/7.22.0', // 'Host', // '127.0.0.1:8000', // 'ACCEPT', // '*' ] console.log(request.rawHeaders);` **Since** v0.11.6 | `express.Request.rawHeaders` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1301 |
| `rawTrailers` | `public` | `string`[] | The raw request/response trailer keys and values exactly as they were received. Only populated at the `'end'` event. **Since** v0.11.6 | `express.Request.rawTrailers` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1319 |
| `readable` | `public` | `boolean` | Is `true` if it is safe to call [read](RequestWithAuth.md#read), which means the stream has not been destroyed or emitted `'error'` or `'end'`. **Since** v11.4.0 | `express.Request.readable` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:77 |
| `readableAborted` | `readonly` | `boolean` | **`Experimental`** Returns whether the stream was destroyed or errored before emitting `'end'`. **Since** v16.8.0 | `express.Request.readableAborted` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:71 |
| `readableDidRead` | `readonly` | `boolean` | **`Experimental`** Returns whether `'data'` has been emitted. **Since** v16.7.0, v14.18.0 | `express.Request.readableDidRead` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:83 |
| `readableEncoding` | `readonly` | `null` \| `BufferEncoding` | Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](RequestWithAuth.md#setencoding) method. **Since** v12.7.0 | `express.Request.readableEncoding` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:88 |
| `readableEnded` | `readonly` | `boolean` | Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted. **Since** v12.9.0 | `express.Request.readableEnded` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:93 |
| `readableFlowing` | `readonly` | `null` \| `boolean` | This property reflects the current state of a `Readable` stream as described in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section. **Since** v9.4.0 | `express.Request.readableFlowing` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:99 |
| `readableHighWaterMark` | `readonly` | `number` | Returns the value of `highWaterMark` passed when creating this `Readable`. **Since** v9.3.0 | `express.Request.readableHighWaterMark` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:104 |
| `readableLength` | `readonly` | `number` | This property contains the number of bytes (or objects) in the queue ready to be read. The value provides introspection data regarding the status of the `highWaterMark`. **Since** v9.4.0 | `express.Request.readableLength` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:111 |
| `readableObjectMode` | `readonly` | `boolean` | Getter for the property `objectMode` of a given `Readable` stream. **Since** v12.3.0 | `express.Request.readableObjectMode` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:116 |
| `res?` | `public` | `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\> | After middleware.init executed, Request will contain res and next properties See: express/lib/middleware/init.js | `express.Request.res` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:665 |
| `route` | `public` | `any` | - | `express.Request.route` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:649 |
| `secure` | `public` | `boolean` | Short-hand for: req.protocol == 'https' | `express.Request.secure` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:568 |
| `signedCookies` | `public` | `any` | - | `express.Request.signedCookies` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:651 |
| `socket` | `public` | `Socket` | The `net.Socket` object associated with the connection. With HTTPS support, use `request.socket.getPeerCertificate()` to obtain the client's authentication details. This property is guaranteed to be an instance of the `net.Socket` class, a subclass of `stream.Duplex`, unless the user specified a socket type other than `net.Socket` or internally nulled. **Since** v0.3.0 | `express.Request.socket` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1233 |
| `stale` | `public` | `boolean` | Check if the request is stale, aka "Last-Modified" and / or the "ETag" for the resource has changed. | `express.Request.stale` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:630 |
| `statusCode?` | `public` | `number` | **Only valid for response obtained from ClientRequest.** The 3-digit HTTP response status code. E.G. `404`. **Since** v0.1.1 | `express.Request.statusCode` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1381 |
| `statusMessage?` | `public` | `string` | **Only valid for response obtained from ClientRequest.** The HTTP response status message (reason phrase). E.G. `OK` or `Internal Server Error`. **Since** v0.11.10 | `express.Request.statusMessage` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1388 |
| `subdomains` | `public` | `string`[] | Return subdomains as an array. Subdomains are the dot-separated parts of the host before the main domain of the app. By default, the domain of the app is assumed to be the last two parts of the host. This can be changed by setting "subdomain offset". For example, if the domain is "tobi.ferrets.example.com": If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`. If "subdomain offset" is 3, req.subdomains is `["tobi"]`. | `express.Request.subdomains` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:601 |
| `trailers` | `public` | `Dict`\<`string`\> | The request/response trailers object. Only populated at the `'end'` event. **Since** v0.3.0 | `express.Request.trailers` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1306 |
| `trailersDistinct` | `public` | `Dict`\<`string`[]\> | Similar to `message.trailers`, but there is no join logic and the values are always arrays of strings, even for headers received just once. Only populated at the `'end'` event. **Since** v18.3.0, v16.17.0 | `express.Request.trailersDistinct` | node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1313 |
| `url` | `public` | `string` | **Only valid for request obtained from Server.** Request URL string. This contains only the URL that is present in the actual HTTP request. Take the following request: `GET /status?name=ryan HTTP/1.1 Accept: text/plain` To parse the URL into its parts: `new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`);` When `request.url` is `'/status?name=ryan'` and `process.env.HOST` is undefined: `$ node > new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`); URL { href: 'http://localhost/status?name=ryan', origin: 'http://localhost', protocol: 'http:', username: '', password: '', host: 'localhost', hostname: 'localhost', port: '', pathname: '/status', search: '?name=ryan', searchParams: URLSearchParams { 'name' => 'ryan' }, hash: '' }` Ensure that you set `process.env.HOST` to the server's host name, or consider replacing this part entirely. If using `req.headers.host`, ensure proper validation is used, as clients may specify a custom `Host` header. **Since** v0.1.90 | `express.Request.url` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:655 |
| `xhr` | `public` | `boolean` | Check if the request was an _XMLHttpRequest_. | `express.Request.xhr` | node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:635 |

## Methods

### \_construct()?

```ts
optional _construct(callback: (error?: null | Error) => void): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`error`?: `null` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

`express.Request._construct`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:133

***

### \_destroy()

```ts
_destroy(error: null | Error, callback: (error?: null | Error) => void): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `null` \| `Error` |
| `callback` | (`error`?: `null` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

`express.Request._destroy`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:574

***

### \_read()

```ts
_read(size: number): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

`express.Request._read`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:134

***

### \[asyncDispose\]()

```ts
asyncDispose: Promise<void>
```

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Since

v20.4.0

#### Inherited from

`express.Request.[asyncDispose]`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:659

***

### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<any, any, any>
```

#### Returns

`AsyncIterator`\<`any`, `any`, `any`\>

#### Inherited from

`express.Request.[asyncIterator]`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:654

***

### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |
| `event` | `string` \| `symbol` |
| ...`args` | `AnyRest` |

#### Returns

`void`

#### Inherited from

`express.Request.[captureRejectionSymbol]`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:136

***

### accepts()

#### accepts(undefined)

```ts
accepts(): string[]
```

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => false

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

##### Returns

`string`[]

##### Inherited from

`express.Request.accepts`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:454

#### accepts(type)

```ts
accepts(type: string): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.accepts`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:455

#### accepts(type)

```ts
accepts(type: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.accepts`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:456

#### accepts(type)

```ts
accepts(...type: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`type` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.accepts`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:457

***

### acceptsCharsets()

#### acceptsCharsets(undefined)

```ts
acceptsCharsets(): string[]
```

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`express.Request.acceptsCharsets`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:466

#### acceptsCharsets(charset)

```ts
acceptsCharsets(charset: string): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `charset` | `string` |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsCharsets`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:467

#### acceptsCharsets(charset)

```ts
acceptsCharsets(charset: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `charset` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsCharsets`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:468

#### acceptsCharsets(charset)

```ts
acceptsCharsets(...charset: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`charset` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsCharsets`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:469

***

### acceptsEncodings()

#### acceptsEncodings(undefined)

```ts
acceptsEncodings(): string[]
```

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`express.Request.acceptsEncodings`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:478

#### acceptsEncodings(encoding)

```ts
acceptsEncodings(encoding: string): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding` | `string` |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsEncodings`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:479

#### acceptsEncodings(encoding)

```ts
acceptsEncodings(encoding: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsEncodings`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:480

#### acceptsEncodings(encoding)

```ts
acceptsEncodings(...encoding: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`encoding` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsEncodings`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:481

***

### acceptsLanguages()

#### acceptsLanguages(undefined)

```ts
acceptsLanguages(): string[]
```

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

##### Returns

`string`[]

##### Inherited from

`express.Request.acceptsLanguages`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:490

#### acceptsLanguages(lang)

```ts
acceptsLanguages(lang: string): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `lang` | `string` |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsLanguages`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:491

#### acceptsLanguages(lang)

```ts
acceptsLanguages(lang: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `lang` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsLanguages`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:492

#### acceptsLanguages(lang)

```ts
acceptsLanguages(...lang: string[]): string | false
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`lang` | `string`[] |

##### Returns

`string` \| `false`

##### Inherited from

`express.Request.acceptsLanguages`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:493

***

### addListener()

#### addListener(event, listener)

```ts
addListener(event: "close", listener: () => void): this
```

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:598

#### addListener(event, listener)

```ts
addListener(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:599

#### addListener(event, listener)

```ts
addListener(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:600

#### addListener(event, listener)

```ts
addListener(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:601

#### addListener(event, listener)

```ts
addListener(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:602

#### addListener(event, listener)

```ts
addListener(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:603

#### addListener(event, listener)

```ts
addListener(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:604

#### addListener(event, listener)

```ts
addListener(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.addListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:605

***

### asIndexedPairs()

```ts
asIndexedPairs(options?: Pick<ArrayOptions, "signal">): Readable
```

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> |

#### Returns

`Readable`

a stream of indexed pairs.

#### Since

v17.5.0

#### Inherited from

`express.Request.asIndexedPairs`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:549

***

### compose()

```ts
compose<T>(stream: T | ComposeFnParam | Iterable<T> | AsyncIterable<T>, options?: {
  signal: AbortSignal;
 }): T
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ReadableStream`\<`T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | `T` \| `ComposeFnParam` \| `Iterable`\<`T`\> \| `AsyncIterable`\<`T`\> |
| `options`? | `object` |
| `options.signal`? | `AbortSignal` |

#### Returns

`T`

#### Inherited from

`express.Request.compose`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:36

***

### destroy()

```ts
destroy(error?: Error): this
```

Calls `destroy()` on the socket that received the `IncomingMessage`. If `error` is provided, an `'error'` event is emitted on the socket and `error` is passed
as an argument to any listeners on the event.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error`? | `Error` |

#### Returns

`this`

#### Since

v0.3.0

#### Inherited from

`express.Request.destroy`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1394

***

### drop()

```ts
drop(limit: number, options?: Pick<ArrayOptions, "signal">): Readable
```

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limit` | `number` | the number of chunks to drop from the readable. |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> | - |

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

#### Since

v17.5.0

#### Inherited from

`express.Request.drop`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:535

***

### emit()

#### emit(event)

```ts
emit(event: "close"): boolean
```

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:606

#### emit(event, chunk)

```ts
emit(event: "data", chunk: any): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `chunk` | `any` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:607

#### emit(event)

```ts
emit(event: "end"): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:608

#### emit(event, err)

```ts
emit(event: "error", err: Error): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:609

#### emit(event)

```ts
emit(event: "pause"): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:610

#### emit(event)

```ts
emit(event: "readable"): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:611

#### emit(event)

```ts
emit(event: "resume"): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:612

#### emit(event, args)

```ts
emit(event: string | symbol, ...args: any[]): boolean
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

##### Returns

`boolean`

##### Inherited from

`express.Request.emit`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:613

***

### eventNames()

```ts
eventNames(): (string | symbol)[]
```

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

`express.Request.eventNames`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:922

***

### every()

```ts
every(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>
```

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `boolean` \| `Promise`\<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Since

v17.5.0

#### Inherited from

`express.Request.every`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:514

***

### filter()

```ts
filter(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Readable
```

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `boolean` \| `Promise`\<`boolean`\> | a function to filter chunks from the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`express.Request.filter`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:442

***

### find()

#### find(fn, options)

```ts
find<T>(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => data is T, options?: ArrayOptions): Promise<undefined | T>
```

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `data is T` | a function to call on each chunk of the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Since

v17.5.0

##### Inherited from

`express.Request.find`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:497

#### find(fn, options)

```ts
find(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<any>
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `boolean` \| `Promise`\<`boolean`\> |
| `options`? | `ArrayOptions` |

##### Returns

`Promise`\<`any`\>

##### Inherited from

`express.Request.find`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:501

***

### flatMap()

```ts
flatMap(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable
```

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `any` | a function to map over every chunk in the stream. May be async. May be a stream or generator. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Since

v17.5.0

#### Inherited from

`express.Request.flatMap`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:528

***

### forEach()

```ts
forEach(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => void | Promise<void>, options?: ArrayOptions): Promise<void>
```

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `void` \| `Promise`\<`void`\> | a function to call on each chunk of the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Since

v17.5.0

#### Inherited from

`express.Request.forEach`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:461

***

### get()

#### get(name)

```ts
get(name: "set-cookie"): undefined | string[]
```

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header()`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `"set-cookie"` |

##### Returns

`undefined` \| `string`[]

##### Inherited from

`express.Request.get`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:411

#### get(name)

```ts
get(name: string): undefined | string
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

`undefined` \| `string`

##### Inherited from

`express.Request.get`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:412

***

### getMaxListeners()

```ts
getMaxListeners(): number
```

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`express.Request.getMaxListeners`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:774

***

### header()

#### header(name)

```ts
header(name: "set-cookie"): undefined | string[]
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `"set-cookie"` |

##### Returns

`undefined` \| `string`[]

##### Inherited from

`express.Request.header`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:414

#### header(name)

```ts
header(name: string): undefined | string
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

`undefined` \| `string`

##### Inherited from

`express.Request.header`

##### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:415

***

### is()

```ts
is(type: string | string[]): null | string | false
```

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // => true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // => true

     req.is('html');
     // => false

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` \| `string`[] |

#### Returns

`null` \| `string` \| `false`

#### Inherited from

`express.Request.is`

#### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:551

***

### isPaused()

```ts
isPaused(): boolean
```

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Since

v0.11.14

#### Inherited from

`express.Request.isPaused`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:295

***

### iterator()

```ts
iterator(options?: {
  destroyOnReturn: boolean;
}): AsyncIterator<any, any, any>
```

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | - |
| `options.destroyOnReturn`? | `boolean` | When set to `false`, calling `return` on the async iterator, or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream. **Default: `true`**. |

#### Returns

`AsyncIterator`\<`any`, `any`, `any`\>

#### Since

v16.3.0

#### Inherited from

`express.Request.iterator`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:425

***

### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number
```

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener`? | `Function` | The event handler function |

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`express.Request.listenerCount`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:868

***

### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`express.Request.listeners`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:787

***

### map()

```ts
map(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable
```

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `any` | a function to map over every chunk in the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Since

v17.4.0, v16.14.0

#### Inherited from

`express.Request.map`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:433

***

### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Alias for `emitter.removeListener()`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`express.Request.off`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:747

***

### on()

#### on(event, listener)

```ts
on(event: "close", listener: () => void): this
```

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"close"` | - |
| `listener` | () => `void` | The callback function |

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:614

#### on(event, listener)

```ts
on(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:615

#### on(event, listener)

```ts
on(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:616

#### on(event, listener)

```ts
on(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:617

#### on(event, listener)

```ts
on(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:618

#### on(event, listener)

```ts
on(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:619

#### on(event, listener)

```ts
on(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:620

#### on(event, listener)

```ts
on(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.on`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:621

***

### once()

#### once(event, listener)

```ts
once(event: "close", listener: () => void): this
```

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"close"` | - |
| `listener` | () => `void` | The callback function |

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:622

#### once(event, listener)

```ts
once(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:623

#### once(event, listener)

```ts
once(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:624

#### once(event, listener)

```ts
once(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:625

#### once(event, listener)

```ts
once(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:626

#### once(event, listener)

```ts
once(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:627

#### once(event, listener)

```ts
once(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:628

#### once(event, listener)

```ts
once(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.once`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:629

***

### ~~param()~~

```ts
param(name: string, defaultValue?: any): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `defaultValue`? | `any` |

#### Returns

`string`

#### Deprecated

since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

 - Checks route placeholders, ex: _/user/:id_
 - Checks body params, ex: id=12, {"id":12}
 - Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Inherited from

`express.Request.param`

#### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:528

***

### pause()

```ts
pause(): this
```

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`express.Request.pause`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:259

***

### pipe()

```ts
pipe<T>(destination: T, options?: {
  end: boolean;
 }): T
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `WritableStream`\<`T`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `destination` | `T` |
| `options`? | `object` |
| `options.end`? | `boolean` |

#### Returns

`T`

#### Inherited from

`express.Request.pipe`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:30

***

### prependListener()

#### prependListener(event, listener)

```ts
prependListener(event: "close", listener: () => void): this
```

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"close"` | - |
| `listener` | () => `void` | The callback function |

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:630

#### prependListener(event, listener)

```ts
prependListener(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:631

#### prependListener(event, listener)

```ts
prependListener(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:632

#### prependListener(event, listener)

```ts
prependListener(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:633

#### prependListener(event, listener)

```ts
prependListener(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:634

#### prependListener(event, listener)

```ts
prependListener(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:635

#### prependListener(event, listener)

```ts
prependListener(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:636

#### prependListener(event, listener)

```ts
prependListener(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:637

***

### prependOnceListener()

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "close", listener: () => void): this
```

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"close"` | - |
| `listener` | () => `void` | The callback function |

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:638

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:639

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:640

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:641

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:642

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:643

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:644

#### prependOnceListener(event, listener)

```ts
prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.prependOnceListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:645

***

### push()

```ts
push(chunk: any, encoding?: BufferEncoding): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | `any` |
| `encoding`? | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

`express.Request.push`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:415

***

### range()

```ts
range(size: number, options?: Options): undefined | Ranges | Result
```

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |
| `options`? | `Options` |

#### Returns

`undefined` \| `Ranges` \| `Result`

#### Inherited from

`express.Request.range`

#### Defined in

node\_modules/.pnpm/@types+express-serve-static-core@4.17.43/node\_modules/@types/express-serve-static-core/index.d.ts:507

***

### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`express.Request.rawListeners`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:818

***

### read()

```ts
read(size?: number): any
```

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](RequestWithAuth.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size`? | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Since

v0.9.4

#### Inherited from

`express.Request.read`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:212

***

### reduce()

#### reduce(fn, initial, options)

```ts
reduce<T>(
   fn: (previous: any, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial?: undefined, 
options?: Pick<ArrayOptions, "signal">): Promise<T>
```

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`previous`: `any`, `data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `T` | a reducer function to call over every chunk in the stream. Async or not. |
| `initial`? | `undefined` | the initial value to use in the reduction. |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> | - |

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Since

v17.5.0

##### Inherited from

`express.Request.reduce`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:564

#### reduce(fn, initial, options)

```ts
reduce<T>(
   fn: (previous: T, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial: T, 
options?: Pick<ArrayOptions, "signal">): Promise<T>
```

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | (`previous`: `T`, `data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `T` |
| `initial` | `T` |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> |

##### Returns

`Promise`\<`T`\>

##### Inherited from

`express.Request.reduce`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:569

***

### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this
```

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName`? | `string` \| `symbol` |

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`express.Request.removeAllListeners`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:758

***

### removeListener()

#### removeListener(event, listener)

```ts
removeListener(event: "close", listener: () => void): this
```

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:646

#### removeListener(event, listener)

```ts
removeListener(event: "data", listener: (chunk: any) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: `any`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:647

#### removeListener(event, listener)

```ts
removeListener(event: "end", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:648

#### removeListener(event, listener)

```ts
removeListener(event: "error", listener: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:649

#### removeListener(event, listener)

```ts
removeListener(event: "pause", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"pause"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:650

#### removeListener(event, listener)

```ts
removeListener(event: "readable", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:651

#### removeListener(event, listener)

```ts
removeListener(event: "resume", listener: () => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"resume"` |
| `listener` | () => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:652

#### removeListener(event, listener)

```ts
removeListener(event: string | symbol, listener: (...args: any[]) => void): this
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

##### Returns

`this`

##### Inherited from

`express.Request.removeListener`

##### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:653

***

### resume()

```ts
resume(): this
```

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'` event listener.

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`express.Request.resume`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:278

***

### setEncoding()

```ts
setEncoding(encoding: BufferEncoding): this
```

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as `Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer` objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling `readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`express.Request.setEncoding`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:237

***

### setMaxListeners()

```ts
setMaxListeners(n: number): this
```

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `n` | `number` |

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

`express.Request.setMaxListeners`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/events.d.ts:768

***

### setTimeout()

```ts
setTimeout(msecs: number, callback?: () => void): this
```

Calls `message.socket.setTimeout(msecs, callback)`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msecs` | `number` |
| `callback`? | () => `void` |

#### Returns

`this`

#### Since

v0.5.9

#### Inherited from

`express.Request.setTimeout`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/http.d.ts:1324

***

### some()

```ts
some(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>
```

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`data`: `any`, `options`?: `Pick`\<`ArrayOptions`, `"signal"`\>) => `boolean` \| `Promise`\<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options`? | `ArrayOptions` | - |

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Since

v17.5.0

#### Inherited from

`express.Request.some`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:483

***

### take()

```ts
take(limit: number, options?: Pick<ArrayOptions, "signal">): Readable
```

This method returns a new stream with the first *limit* chunks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limit` | `number` | the number of chunks to take from the readable. |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> | - |

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Since

v17.5.0

#### Inherited from

`express.Request.take`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:542

***

### toArray()

```ts
toArray(options?: Pick<ArrayOptions, "signal">): Promise<any[]>
```

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `Pick`\<`ArrayOptions`, `"signal"`\> |

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Since

v17.5.0

#### Inherited from

`express.Request.toArray`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:473

***

### unpipe()

```ts
unpipe(destination?: WritableStream): this
```

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](RequestWithAuth.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `destination`? | `WritableStream` | Optional specific stream to unpipe |

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`express.Request.unpipe`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:322

***

### unshift()

```ts
unshift(chunk: any, encoding?: BufferEncoding): void
```

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](RequestWithAuth.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](RequestWithAuth.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](RequestWithAuth.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding`? | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Since

v0.9.11

#### Inherited from

`express.Request.unshift`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:388

***

### wrap()

```ts
wrap(stream: ReadableStream): this
```

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](RequestWithAuth.md#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stream` | `ReadableStream` | An "old style" readable stream |

#### Returns

`this`

#### Since

v0.9.4

#### Inherited from

`express.Request.wrap`

#### Defined in

node\_modules/.pnpm/@types+node@22.9.0/node\_modules/@types/node/stream.d.ts:414
