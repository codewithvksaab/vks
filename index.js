//file based, Build In, Third-Party

const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./index.html", "utf-8");

const host = "localhost";
const port = 5000;

const server = http.createServer((req,res) =>{
    if (req.url == "/") {
        return res.end(home);
    }
    if (req.url == "/about") {
        return res.end("<h1>About</h1>");
    }
    if (req.url == "/contact") {
        return res.end("<h1>Contact</h1>");
    }
    if (req.url == "/services") {
        return res.end("<h1>Services</h1>");
    }
    else {
        return res.end("<h1>404 page not found..</h1>");
    }
});

server.listen(port, host, () => {
    console.log(`Server is Working on http://${host}:${port})`);
});