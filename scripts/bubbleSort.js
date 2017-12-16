function bubbleSort(array) {

  for (let i = 0; i < array.length; i++) {
    //we can use array.length - i here because each time we complete
    //a complete pass of the inner loop, we can then ignore the last item
    //because we know the biggest item was bubbled up. then the last 2, then 3
    for (let j = 0; j < array.length - i; j++) {

      //if the value at j is greater than j + 1, swap em
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }

    }
  }
  return array;
}

module.exports = bubbleSort;
