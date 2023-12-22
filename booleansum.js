function countTrue(arr) {
console.log("No of TRUE:");
console.log("===========");
return arr.filter(Boolean).length;
}

let arr = [true, false, false, true, true, false, true];
console.log(countTrue([true, false, false, true, true, false, true]));
