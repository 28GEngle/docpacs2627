const dotenv = require("dotenv").config();
const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const PORT = process.env.PORT;

const FORM = fs.readFileSync("pages/form.html");

const server = http.createServer(function (request, response) {
    requestedURL = request.url;
    host = request.headers.host;
    parsed = new URL(requestedURL, `http://${host}`)

    if (parsed.pathname == "/") {
        response.writeHead(200, "Good Status");
        response.end("Root file. Go to /form");

    } else if (parsed.pathname == "/form") {
        
        if (request.method == "POST") {
            data = ""
            request.on("data", chunk => {
                data += chunk
                console.log(chunk)
            })
            request.on("end", () => {
                console.log(data)
                searchParams = new URLSearchParams(data);

                console.log(searchParams.get("message"));
                response.writeHead(200, "Good Status");
                response.end(`recieved as:\n${data}`);
            })
        } else if (request.method == "GET") {
            response.writeHead(200, "Good Status");
            response.end(FORM);
        } else {
            response.writeHead(404, "Unknown request method");
            response.end("Unknown request method");
        }

    } else if (parsed.pathname == "/query") {
        response.writeHead(200, "Good Status");
        response.end(`Recieved: ${parsed.searchParams.get("message")}`);
        
    } else {
        response.writeHead(404, "Page does not exist");
        response.end("Invalid URL.");
    };
});

server.listen(PORT, "localhost", function () {
    console.log(`Running on ${PORT}`);
});