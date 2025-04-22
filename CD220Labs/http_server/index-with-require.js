 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    const date = today.getDate();

    //const hour = date.getHours();
    //let greeting;
    
    if (date.getHours() >= 6 && date.getHours() < 12) {
        greeting = "Good morning!";
    }

    else if (date.getHours() >= 12 && date.getHours() < 17) {
        greeting = "Good afternoon!";
    }

    else if (date.getHours() >= 17 && date.getHours() < 22) {
        greeting = "Good evening!";
    }

    else {
        greeting = "Sweet dreams king...";
    }
    
    res.end("A");
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
