# HTTP Server

This README provides an explanation of the given code, which creates a basic HTTP server that listens on a specified host and port and responds with a simple message.

## Code Explanation

```javascript
// importing http library
const http = require('http');
```
The code starts by importing the `http` module, which is a built-in Node.js module that provides functionality for creating HTTP servers and handling HTTP requests and responses.

```javascript
const host = 'localhost';
const port = 8080;
```

The variables `host` and `port` store the values for the host address and port number on which the server will listen. In this case, the server will listen on the local machine (`localhost`) and port 8080.

```javascript
const requestListener = function(req, res) {
  res.writeHead(200);
  res.end("Hello from Dolly");
};
```
The `requestListener` is a callback function that will be called whenever an HTTP request is made to the server. It takes two parameters: `req` (request) and `res` (response). In this case, the function sets the response status code to 200 (OK) using `res.writeHead(200)` and sends the response body as "Hello from Server" using `res.end("Hello from Server")`. This message will be displayed in the browser or any HTTP client that makes a request to the server.

```javascript
const server = http.createServer(requestListener);
```
The `http.createServer()` method creates an HTTP server instance. It takes the `requestListener` function as an argument, which will be called for each incoming request to the server.

```javascript
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
```
The `server.listen()` method starts the server and makes it listen on the specified `port` and `host`. It also takes an optional callback function, which will be executed once the server starts listening. In this case, the callback logs a message to the console indicating that the server is running and specifies the URL where it can be accessed.

## Running the Code
To run the code, make sure you have Node.js installed on your machine. Save the code in a file with a `.js` extension, for example, `server.js`. Then, open a terminal or command prompt, navigate to the directory where the file is located, and execute the following command:
```bash
node server.js
```

If everything is set up correctly, you should see the message "Server is running on `http://localhost:8080`" logged to the console. The server is now running and ready to respond to HTTP requests with the message "Hello from Dolly".




