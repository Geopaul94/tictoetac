const express =require ('express')
const http =require ('http')
const app =express()
const port =process.env.PORT  ||3000;
var server = http.createServer(App);
var io  =require ("socket.io")(server);




//middile ware 
app.use(express.json());
server.listen(port,'0.0.0.0')