import http from 'http';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const products = [
    {
        id: 1,
        name: 'tv'
    }
]

const readLocalFile = (filename) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filepath = `${__dirname}/${filename}`

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
    })
}

const handler = (req, res) => {
    switch (req.url) {
        case '/products':
            readLocalFile('products.json')
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