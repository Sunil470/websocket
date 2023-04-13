const ws = require('ws')
const server = new ws.Server({port: 5000})



server.on('connection', function(client){

client.onmessage = function(msg)
{
    server.clients.forEach((ele) => {
        if(ele!=client)
        ele.send(msg.data)
    });
}


client.on('close', (client)=>{
   console.log(server.clients.size)
})

})






