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
        response.writeHead(200, "Good Status");
        response.end(FORM);

    } else if (parsed.pathname == "/query") {
        response.writeHead(200, "Good Status");
        console.log(parsed.searchParams.get("ip"))
        response.end(`Your IP: ${parsed.searchParams.get("ip")}\nYour Password: ${parsed.searchParams.get("password")}`);
        
    } else {
        response.writeHead(404, "Page does not exist");
        response.end("Invalid URL.");
    };
});

server.listen(PORT, "localhost", function () {
    console.log(`Running on ${PORT}`);
});