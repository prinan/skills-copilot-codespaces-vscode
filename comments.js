// Create web server
// 1. Create a web server
// 2. Read the comments.json file
// 3. Create a route for the comments
// 4. Send the comments back to the client
// 5. Listen on port 3000
// 6. Print a message to the console
// 7. Read the comments.json file
// 8. Parse the comments.json file
// 9. Send the comments back to the client

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    // 3. Create a route for the comments
    if (req.url === '/comments' && req.method === 'GET') {
        // 7. Read the comments.json file
        fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Server error' }));
            } else {
                // 8. Parse the comments.json file
                const comments = JSON.parse(data);
                // 9. Send the comments back to the client
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(comments));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not found' }));
    }
});

// 5. Listen on port 3000
server.listen(port, () => {
    // 6. Print a message to the console
    console.log(`Server running on port ${port}`);
});