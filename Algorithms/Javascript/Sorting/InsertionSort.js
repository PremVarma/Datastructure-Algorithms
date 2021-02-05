//Insertion Sorted
//Use when list is almost sorted

const numbers=[99,44,6,2,1,5,63,87,283,4,0];

const insertionSort=(array)=>{
    const length=array.length;
    for(let i=0;i<length;i++){
        if(array[i]<array[0]){
            //Move num to first position
            array.unshift(array.splice(i,1)[0]);
        }else{
            for(let j=1;j<i;j++){
                if(array[j]>array[j-1] && array[i]<array[j]){
                    array.splice(j,0,array.splice(i,1)[0])
                }
            }
        }
    }
    console.log(array)
}

insertionSort(numbers)