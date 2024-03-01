exports.parseInput = (input) => {
    // Parse the JSON string into an array of objects
    const dataArray = JSON.parse(input);
    
    // Map each object in the array to a string in the desired format
    const resultList = dataArray.map(obj => `http://${obj.ip}:${obj.port}`);
    
    return resultList;
}