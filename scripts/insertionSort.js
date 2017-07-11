

function insertionSort(array) {
  // console.log('insertion unsorted:', array);
  var unSortedArray = array.slice();
  var sortedArray = [];
  var itemToInsert;
  //var itemToCompare;
  var indexOfCurrItem;
  var indexOfPrevItem;

  //pull 1st item
  // itemToInsert = unSortedArray.shift();
  // sortedArray.push(itemToInsert);

  //pull 2nd item
  // itemToInsert = unSortedArray.shift();
  // sortedArray.push(itemToInsert);


  for (let i = 0; i < array.length; i++) {
    itemToInsert = unSortedArray.shift();
    sortedArray.push(itemToInsert);

    indexOfCurrItem = i //sortedArray.indexOf(itemToInsert);
    indexOfPrevItem = indexOfCurrItem - 1;

    while (indexOfPrevItem >= 0) {
      if (sortedArray[indexOfCurrItem] < sortedArray[indexOfPrevItem]) {
        [sortedArray[indexOfPrevItem], sortedArray[indexOfCurrItem]] = [sortedArray[indexOfCurrItem], sortedArray[indexOfPrevItem]];
        //we needed to swap, which means we have to keep going down the line and comparing
        indexOfCurrItem--;
        indexOfPrevItem--;
      } else {
        indexOfPrevItem = -1;
      }
    }
  }
  // console.log('insertion sorted:', sortedArray);
  return sortedArray;

}

module.exports = insertionSort;
