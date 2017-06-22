
import http = require("http");
import Url = require("url");

interface Parameters {
    [key: string]: string;
    }

let server: http.Server = http.createServer();
    server.addListener("listening", onListen);
    server.addListener("request", handleRequest);
    server.listen(process.env.PORT || 8100);

function onListen(): void {
    console.log ("Hello Im your server today");
    }

function handleRequest(_request: http.IncomingMessage, _response: http.ServerResponse): void {
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query: Parameters = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    for (key in query)
        console.log(key + ":" + query[key]);
    
    _response.write("Sie haben folgende Eissorten ausgewaehlt: <br>");
    _response.write("Erdbeere: " + query["Erdbeere"] + "<br>");
    _response.write("Zitrone: " + query["Zitrone"] + "<br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Schokolade: " + query["Schokolade"] + "<br>");
    _response.write("Nuss: " + query["Nuss"] + "<br>");
    _response.write("Melone: " + query["Melone"] + "<br>");
    _response.write("Joghurt: " + query["Joghurt"] + "<br>");
    _response.write("Banane: " + query["Banane"] + "<br>");
    _response.write("Kuerbis: " + query["Kuerbis"] + "<br>");
    _response.write("Minze: " + query["Minze"] + "<br>");
    _response.write("Cookie: " + query["Cookie"] + "<br>");
    _response.write("<br>");
    _response.write("Folgende Darreichungsform wurde ausgewaehlt: " + query["Darreichungsform"] + "<br>");
    _response.write("Folgende Zusaetze wurden ausgewaehlt: " + query["Zusaetze"] + "<br>");
    _response.write("Die Daten sind angekommen!");
    _response.end();
}