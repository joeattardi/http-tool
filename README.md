# http-tool
A command-line tool for interacting with web sites and APIs
http-tool is a command-line utility like curl or HTTPie, used for making HTTP requests.

![Screenshot](https://raw.githubusercontent.com/joeattardi/http-tool/master/screenshot.png)

# Installation
Make sure you have Node 4 or newer, and run `npm install -g http-tool`.

# Usage
Usage: `http-tool [options] <URL>`

## Options
### HTTP method
To specify which HTTP method to use (`GET`, `POST`, `DELETE`, etc.), use the `--method` or `-m` option. The default is `GET`.

### Custom request headers
To include custom headers in the HTTP request, use the `--header` or `-H` option. The header should be specified as a `key: value` pair as a string, e.g. `-H "Content-Type: application/json`. You can use the `--header` or `-H` option multiple times for multiple custom headers.

### Request body data
To send data in the request body, use the `--data` or `-d` option. For example, to send JSON in a POST request:

`http-tool -m POST -H "Content-Type: application/json" -d "{\"foo\": \"bar\"}" http://httpbin.org/post`

### Cookies
To include cookies with a request, use the `--cookie` or `-c` option. The cookie should be specified as a `Key=Value` pair, e.g. `--cookie "Token=abc123"`. You can use the `--cookie` option multiple times for multiple cookies.

### Output options
 * `--headers-only, -r`: Only include the response headers in the output
 * `--body-only, -b`: Only include the response body in the output
