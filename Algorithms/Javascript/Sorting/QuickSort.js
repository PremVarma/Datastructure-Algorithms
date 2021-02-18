// Quick Sort: pivoting technique. on average -> fastest, but has very bad worst case scenario (risky)
// Time:
// worst case: O(n^2)
// average: O(n log n)
// Space:
// worst O(log n)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    const len = array.length;
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
  
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
  
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }
  
  
  //Select first and last index as 2nd and 3rd parameters
  quickSort(numbers, 0, numbers.length - 1);
  
  //---------------------------------------
  
  //Which Sort is Best?
  
  //Insertion: small input, or mostly sorted (little space, easy implementation)
  //Bubble: never going to use -> low efficient, only for educational purposes
  //Selection: never going to use -> low efficient, only for educational purposes
  //Merge: fast and time always O(n log n), (not best for space/memory though)
  //Quick: better than merge (time avg & space). most popular. downside = horrible worst case, risky