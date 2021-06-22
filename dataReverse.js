// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
// (byte4)   (byte3)   (byte2)   (byte1)


function dataReverse(data){
    //data must be an array
    if (typeof data !== 'object') 
        throw new Error('Data must be entered as an array');
    //data is an array. if length is eight, return the argument. 
    if(data.length === 8) return data;
    //data array's length must be at least 8, or any positive multiple.
    if(data.length < 8 || data.length % 8 !== 0) throw new Error('Data formatted incorrectly');

    let subArrays = [];
    for(let i = 0; i <= data.length - 7; i += 8){
        subArrays.push(data.slice(i, i + 8));
    }

    subArrays.reverse();
    let firstArray = subArrays.shift();

    return subArrays.length > 1 ? 
        firstArray.concat(...subArrays) : firstArray.concat(subArrays[0]);
}


module.exports = dataReverse;
