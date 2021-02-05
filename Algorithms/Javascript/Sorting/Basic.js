const letters=['a','d','z','e','r','b'];
const numbers=[2,65,34,2,1,7,8];
const spanish=[]

console.log(letters.sort())
console.log(numbers.sort()) //This won't give expected result, because sort convert int to string and takes unicode.

console.log(numbers.sort((a,b)=>{
    return a-b;
}));