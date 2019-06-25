// Binary Search
// Q: What's the runtime?

const binarySearch = (arr, target) => {
  console.log(`Remaining elements to search: ${arr.length}`);

  const midpoint = Math.floor(arr.length / 2);
  const middle = arr[midpoint];

  if (arr.length <= 1) {
    return middle === target ? target : false;
  }

  if (middle === target) {
    // we found the thing
    return target
  } else if (middle >= target) {
    // let's look in the first half
    return binarySearch(arr.slice(0, midpoint), target);
  } else if (middle < target){
    // let's look in the second half
    return binarySearch(arr.slice(midpoint), target);
  }
};

// Linear Search
// Q: What's the runtime?

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Remaining elements to search: ${arr.length - i}`);

    const elem = arr[i];
    if (elem === target) {
      return target;
    }
  }
  return false;
};
