 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time
    let aestTime = new Date();
    return aestTime; // Return the formatted date and time
};
