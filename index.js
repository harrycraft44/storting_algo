function bogosort(array) {
    sorted = true
    while (sorted) {
        shuffle(array)
        if (sorted_fun(array)){
            sorted = true
            return(array)
        }
    }
}

function stalinsort(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] >= array[index + 1]){
            array.splice(index,1)
        }
          
        
    }
    return array;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function sorted_fun(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] < array[index - 1]){
            return false;
        }
          
        
    }
    return true;

}

function Solar_Bitflip_Sort(array) {
    while (true) {
        if (sorted_fun(array)){
            sorted = true
            return(array)
        }
    }
}
function sleepSort(arr) {
    const sortedArray = [];
  
    arr.forEach((num) => {
      setTimeout(() => {
        sortedArray.push(num);
  
        if (sortedArray.length === arr.length) {
          // All elements have been sorted
          return(sortedArray)
        }
      }, num);
    });
  }
  
  // Example usage
  const numbers = [5, 2, 8, 1, 3];
  sleepSort(numbers);
console.log(bogosort([0,1,6,1,4]))
