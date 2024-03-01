exports.parseInput = (input) => {
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

