 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    const date = today.getDate();

    const hours = date.getHours();
    let greeting;
    
    if (hours >= 6 && 2 < hours) {
        greeting = "Good morning!";
    }

    else if (hours >= 12 && hours < 17) {
        greeting = "Good afternoon!";
    }

    else if (hours >= 17 && hours < 22) {
        greeting = "Good evening!";
    }

    else {
        greeting = "Sweet dreams king...";
    }
    
    res.end(hours.toString());
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
