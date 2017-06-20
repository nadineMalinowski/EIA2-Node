"use strict";
const http = require("http");
const Url = require("url");
let server = http.createServer();
server.addListener("request", handleRequest);
server.listen(process.env.port || 8100);
function handleRequest(_request, _response) {
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
    for (key in query)
        console.log(key + ":" + query[key]);
    _response.write("Die Daten sind angekommen!");
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map