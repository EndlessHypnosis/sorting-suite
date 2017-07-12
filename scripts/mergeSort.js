

function sortArray(array) {

  console.log('sortArray | full array:', array);

  if (array.length < 2) {

    console.log('sortArray | returns:', array);
    return array;

  } else {

    var arrayCopy = array.slice();
    var midpoint = Math.floor(array.length / 2);

    var subArray1 = arrayCopy.splice(0, midpoint);
    console.log('sortArray | sub 1:', subArray1);
    var subArray2 = arrayCopy.slice();
    console.log('sortArray | sub 2:', subArray2);

    var combined = combineTwoSortedArrays(sortArray(subArray1), sortArray(subArray2));
    return combined;

  }
  console.log('sortArray | combined:', combined);


  // split OA  (original array) into 2 halves

  // continue to split each part, until all the parts have just 1 item

  // then you merge those sorted arrays back together up the tree

  // Given two separate lists A and B ordered from least to greatest,
  // construct a list C by repeatedly comparing the least value
  //  of A to the least value of B, removing the lesser value,
  //  and appending it onto C. When one list is exhausted,
  //  append the remaining items in the other list onto C in order.
  //  The list C is then also a sorted list.

}

function combineTwoSortedArrays(arrAy, arrBy) {

  console.log('ctsa | arrAy:', arrAy);
  console.log('ctsa | arrBy:', arrBy);

  var arrCy = [];
  // var leftOvers; // leftovers will be used to store the remaining items from largest array
  // var minArrayLength; // will be equal to the array's length for which either array is shortest

  // do we really need leftovers? does our while loop work without it?

  // here is where we trim the excess into leftovers, and set the minArrayLength
  // if (arrAy.length < arrBy.length) {
    // minArrayLength = arrAy.length;
    // leftOvers = arrBy.splice(arrAy.length, (arrBy.length - arrAy.length));
    // console.log('A was shorter|leftovers:', leftOvers);
  // } else {
    // minArrayLength = arrBy.length;
    // leftOvers = arrAy.splice(arrBy.length, (arrAy.length - arrBy.length));
    // console.log('A was longer|leftovers:', leftOvers);
  // }

  // because we know we can stop when we reach the end of eaither array,
  // we can use a while loop on either length condition.
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

  console.log('ctsa | arrCy:', arrCy);

  //arrCy = arrCy.concat(leftOvers); // push the leftovers back on the end

  return arrCy;
}


module.exports = { sortArray, combineTwoSortedArrays };
