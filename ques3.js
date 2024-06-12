let arr=[1,2,4,2,1,3,2,1];
function abc(arr){
    return arr.filter ((data,index) => arr.indexOf(data) === index);
}
console.log(abc(arr));