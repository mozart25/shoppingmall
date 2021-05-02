import http from 'http';


const products = [
    {
        id: 1,
        name: 'tv'
    }
]

const handler = (req, res) => {
    switch (req.url) {
        case '/products':
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(products))
            break

        case '/categories':
            res.write('categories')
            break
    }
    res.end()
}

const server = http.createServer(handler)

server.listen(5000);