
# bad-sorting

A Node.js module with unconventional sorting algorithms.

- **Bogosort**: A random shuffling algorithm that continues until the array is sorted.
- **Stalinsort**: An algorithm that kills numbers that are out of order.
- **Solar Bitflip Sort**: An algorithm that checks if the array is sorted by RAYS FROM SPACE.
- **Sleep Sort**: A sorting algorithm based on the sleep function, which introduces delays proportional to the element values.



## Usage/Examples

```javascript
const {
  bogosort,
  stalinsort,
  Solar_Bitflip_Sort,
  sleepSort,
} = require('bad-sorting');

// Example usage
const arrayToSort = [5, 2, 8, 1, 3];

console.log('Original Array:', arrayToSort);

const sortedArrayBogo = bogosort([...arrayToSort]);
console.log('Bogosort:', sortedArrayBogo);

const sortedArrayStalin = stalinsort([...arrayToSort]);
console.log('Stalinsort:', sortedArrayStalin);

const sortedArrayBitflip = Solar_Bitflip_Sort([...arrayToSort]);
console.log('Bitflip Sort:', sortedArrayBitflip);

sleepSort([...arrayToSort]); // This will log the sorted array asynchronously

```


## Installation

Install bad-sorting with npm

```bash
  npm install bad-sorting
```
    
## FAQ

#### why?

yes
