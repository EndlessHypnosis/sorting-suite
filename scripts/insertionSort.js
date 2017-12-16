function insertionSort(array) {
  var unSortedArray = array.slice();
  var arrayLength = array.length;
  var sortedArray = [];
  var itemToInsert;
  var indexOfCurrItem;
  var indexOfPrevItem;

  // loop through the original array's length,
  // because we will be continually shifting down this array to nothing
  // so if we did our outter loop on the shifting array, the length would be off
  for (let i = 0; i < arrayLength; i++) {
    itemToInsert = unSortedArray.shift(); //shift pops off first item, returns it
                                          // the array doens't have that item then
    sortedArray.push(itemToInsert);

    indexOfCurrItem = i;
    indexOfPrevItem = indexOfCurrItem - 1;

    // >= 0 because we start at -1, so it will skip on the first insert
    // then on the 2nd, the prev index will be 0, so it will compare, and so on
    while (indexOfPrevItem >= 0) {
      console.log("---------")
      console.log(unSortedArray)
      console.log(sortedArray)
      if (sortedArray[indexOfCurrItem] < sortedArray[indexOfPrevItem]) {
        [sortedArray[indexOfPrevItem], sortedArray[indexOfCurrItem]] = [sortedArray[indexOfCurrItem], sortedArray[indexOfPrevItem]];
        // we needed to swap, which means we have to keep going down the line
        // to continue checking where this newely inserted item fits in our sorted list
        indexOfCurrItem--;
        indexOfPrevItem--;
      } else {
        // didn't need to swap...meaning that round of comparisons against
        // the new array is over with, and we can shift off the next item
        // from our un sorted array
        indexOfPrevItem = -1;
      }
    }
  }
  // console.log('insertion sorted:', sortedArray);
  return sortedArray;

}

module.exports = insertionSort;
