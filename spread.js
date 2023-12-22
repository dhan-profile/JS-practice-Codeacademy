const arr = [61,27,34,42,58];

const adder = (a,b,c,d,e) => {
return a+b+c+d+e;
};

console.log("Minimum No: ");
console.log(Math.min(...arr));
console.log("Maximum No: ");
console.log(Math.max(...arr));
console.log("Addition: ");
console.log(adder(...arr));

