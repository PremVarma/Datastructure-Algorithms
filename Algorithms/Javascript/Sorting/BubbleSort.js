// BubbleSort
// 6 5 3 1 8 7 2 4
// Bubbling the largest value with adacent item untill we get sorted array. eg 6>5 => 5 6 
const numbers=[99,44,6,2,1,5,63,87,283,4,0];

const bubbleSort=(array)=>{
    const length=array.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    console.log(array)
}


bubbleSort(numbers)