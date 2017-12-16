function quickSort(array) {
  // console.log('full array:', array);

  if (array.length < 2) {
    // console.log('return array:', array);
    return array;
  } else {

    var pivot = array[array.length - 1];
    var pivotLeft = [];
    var pivotRight = [];
    var pivotMiddle = [array.pop()];

    for (var i = 0; i < array.length; i++) {

      if (array[i] < pivot) {
        pivotLeft.push(array[i]);
      } else {
        pivotRight.push(array[i]);
      }
    }
    // console.log('pivotLeft', pivotLeft);
    // console.log('pivotMiddle', pivotMiddle);
    // console.log('pivotRight', pivotRight);
    var pivotLeftMiddle = quickSort(pivotLeft).concat(pivotMiddle);
    var pivotTotal = pivotLeftMiddle.concat(quickSort(pivotRight));
    // console.log('pivotTotal', pivotTotal);
    return pivotTotal;
  }
}

module.exports = quickSort;
