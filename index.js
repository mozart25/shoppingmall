import http from 'http';


const handler = (req, res) => {
    console.log('ok')
}

const server = http.createServer(handler)

server.listen(5000);