
function fibonacciIterative(n){
    let arr=[0,1];
    for(let i=2;i<=n;i++){
        arr.push(arr[i-2]+arr[i-1])   
    }
    return arr[n];
}

console.log(fibonacciIterative(8))

function fibonacciRecursive(n){
    if(n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

fibonacciRecursive(3)