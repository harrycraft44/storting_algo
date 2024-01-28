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

  function GenghisKhanSort(array) {
    var sortedarray = [array[1]]
    for (let index = 1; index < array.length; index++) {
        sortedarray.push(sortedarray[sortedarray.length -1 ] + 1)
    }
    return sortedarray;
  }

  function HitlerSort(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index].isOdd()){
            array.splice(index,1)
        }
    }
    return array
  }

  function Thanossort(array) {
    // Delete half of the array elements
    const newSize = Math.ceil(array.length / 2);
    array.splice(newSize);
    return array;
  }


  
  module.exports = {
    bogosort,
    HitlerSort,
    Thanossort,
    GenghisKhanSort,
    stalinsort,
    Solar_Bitflip_Sort,
    sleepSort,
  };
  