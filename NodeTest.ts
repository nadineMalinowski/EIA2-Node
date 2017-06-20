
import http = require("http");
import Url = require("url");

interface Parameters {
    [key: string]: string;
    }

let server: http.Server = http.createServer();
server.addListener("request", handleRequest);
server.listen(process.env.port || 8100);


function handleRequest(_request: http.IncomingMessage, _response: http.ServerResponse): void {
    
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query: Parameters = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    for (key in query)
        console.log(key + ":" + query[key]);    
    
    _response.write("Die Daten sind angekommen!");
    _response.end();
}