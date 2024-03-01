function parseInput(input) {
    // Parse the JSON string into an array of objects
    const dataArray = JSON.parse(input);
    
    // Initialize arrays to store URLs and hash values
    const urlArray = [];
    const hashValueArray = [];
    
    // Iterate over each object in the array
    dataArray.forEach(obj => {
        // Extract the URL and hash value from the object
        const [url] = Object.keys(obj);
        const hashValue = obj[url];
        
        // Add the URL and hash value to their respective arrays
        urlArray.push(url);
        hashValueArray.push(hashValue);
    });
    
    return { urlArray, hashValueArray };
}

// Example usage:
const input = '[{"http://192.168.1.6:3001":36},{"http://192.168.1.6:3002":4}]';
const { urlArray, hashValueArray } = parseInput(input);
console.log("url_array =", urlArray);
console.log("hashvalue_array =", hashValueArray);
