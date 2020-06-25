"use strict"

//import { signalR } from "../../node_modules/@aspnet/signalr/dist/browser/signalr"

var connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5000/messages").build();

connection.on("ReceiveMessage", function (message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var div = document.createElement("div");
    div.innerHTML = msg + "<hr/>";
    document.getElementById("messages").appendChild(div);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var message = document.getElementById("message").value;
    connection.invoke("SendMessageAll", message).catch(function (err) {
        return console.error(err.toString());
    });
    e.preventDefault();
});