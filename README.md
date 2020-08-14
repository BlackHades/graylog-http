# graylog-http
Node module to send Graylog Information via HTTP. Because sometimes that's all you need.

# configuration

	{
		url: "http://localhost:8082/gelf", // URL to the Graylog Node
		gzip : false // Set to true if you want to save some bandwidth.
	}

# Functions

## `new Logger({url: "http://localhost:12201/gelf"})`

Initializes the module with the given configuration

	const Logger = require("graylog-http");
	const logger = new Logger({url: "http://localhost:12201/gelf", host: "example.com"});

Parameters

- (`string` or `instanceof require('url')`) `url` : URL of the HTTP Input on your Graylog server. `graylog-http` supports both HTTP and HTTPS
- (`string`) `host` : Application Host(Optional Identifier)
- (`string`) `facility` : Application Facility(Optional Identifier)

	
## `send(message, level, extras)`

Sends a message to the Graylog Server.
- `message` : Either a string or a object. If an object is given, it will be flattened to be correctly analyzed by Graylog. 
- `level` : from 0 (panic) to 7 (debug), as described in the GELF specifications.
- `extras` : optional `object` to be sent to graylog.

### Shorthands functions to send()

So you don't need to remember which level is which number :)
- `debug(message, extras)`
- `info(message, extras)`
- `notice(message, extras)`
- `warn(message, extras)`
- `error(message, extras)`
- `critical(message, extras)`
- `alert(message, extras)`
- `panic(message, extras)`
## Examples

## Contribute 
- Idea taken from gelf-http library

### Issues
Create any issue or a PR and i will look into it, its open for everybody

## Run unit tests
### You have a real Graylog server with an HTTP input? Test the module with it too!

```bash
$ npm install
$ mocha test
```
## Changelog

