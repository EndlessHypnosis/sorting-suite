function sortArray(array) {
  // console.log('sortArray | full array:', array);
  if (array.length < 2) {
    // console.log('sortArray | returns:', array);
    return array;
  } else {
    var arrayCopy = array.slice();
    var midpoint = Math.floor(array.length / 2);

    var subArray1 = arrayCopy.splice(0, midpoint);
    // console.log('sortArray | sub 1:', subArray1);
    var subArray2 = arrayCopy.slice();
    // console.log('sortArray | sub 2:', subArray2);

    var combined = combineTwoSortedArrays(sortArray(subArray1), sortArray(subArray2));
    return combined;
  }
  // console.log('sortArray | combined:', combined);
}

function combineTwoSortedArrays(arrAy, arrBy) {
  // console.log('ctsa | arrAy:', arrAy);
  // console.log('ctsa | arrBy:', arrBy);
  var arrCy = [];
  // this will continue to be trimmed when we shift
  // we can always use index 0 because we want to compare only item index 0
  while (arrAy.length > 0 || arrBy.length > 0) {
    if (arrAy[0] < arrBy[0] || arrBy[0] === undefined) {

      arrCy.push(arrAy.shift());

    } else if (arrBy[0] < arrAy[0] || arrAy[0] ===  undefined) {

      arrCy.push(arrBy.shift());

    } else if (arrAy[0] === arrBy[0]) {

      arrCy.push(arrAy.shift());
      arrCy.push(arrBy.shift());
    }
  }
  // console.log('ctsa | arrCy:', arrCy);
  return arrCy;
}

module.exports = { sortArray, combineTwoSortedArrays };
