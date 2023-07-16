function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// Exporting variables
// export const avg = average;
// export const name  = "devesh";
// export const repo = "GitHub";
// export const obj ={
//     name:"devesh",
//     fun:average,
//     mob:"9876532"
// };
module.exports.name = "Devesh";
module.exports = average;