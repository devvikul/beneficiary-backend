const jsonServer = require("json-server"); 
const server = jsonServer.create();
const cors = require('cors')
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(cors())
server.use(router);

server.listen(port, ()=>{
    console.log("server running on ", port)
});