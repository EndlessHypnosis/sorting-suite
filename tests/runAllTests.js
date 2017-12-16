import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';
import insertionSort from '../scripts/insertionSort';
import merge from '../scripts/mergeSort';
import quickSort from '../scripts/quickSort';


const randomSmallIntArray = [];
const randomMediumIntArray = [];
const randomLargeIntArray = [];
const randomNegativeIntArray = [];
const randomCharArray = [];

let jsSortedArray;



before(function() {
  console.log('...generating arrays');

  // small int
  for(let i = 0; i < 10; i++) {
    randomSmallIntArray.push(Math.floor(Math.random() * 10));
  }

  // medium int
  for(let i = 0; i < 1000; i++) {
    randomMediumIntArray.push(Math.floor(Math.random() * 1000));
  }

  // large int
  for(let i = 0; i < 10000; i++) {
    randomLargeIntArray.push(Math.floor(Math.random() * 10000));
  }

  // negative int
  for(let i = 0; i < 200; i++) {
    randomNegativeIntArray.push(Math.floor(Math.random() * 200) - 100);
  }

  // characters
  let length = 200;
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = length; i > 0; --i) {
    randomCharArray.push(chars[Math.floor(Math.random() * chars.length)]);
  }

})








describe('Verify Arrays', () => {

  it('Small Int Array should have 10 items', () => {
    expect(randomSmallIntArray).to.have.lengthOf(10);
  })

  it('Medium Int Array should have 1,000 items', () => {
    expect(randomMediumIntArray).to.have.lengthOf(1000);
  })

  it('Large Int Array should have 10,000 items', () => {
    expect(randomLargeIntArray).to.have.lengthOf(10000);
  })

  it('Negative Int Array should have 200 items', () => {
    expect(randomNegativeIntArray).to.have.lengthOf(200);
  })

  it('Char Array should have 200 items', () => {
    expect(randomCharArray).to.have.lengthOf(200);
  })

})




describe('Bubble Sort', () => {

  let localSmallIntArray;
  let localMediumIntArray;
  let localLargeIntArray;
  let localNegativeIntArray;
  let localCharArray;

  before(function() {
    localSmallIntArray = randomSmallIntArray.slice();
    localMediumIntArray = randomMediumIntArray.slice();
    localLargeIntArray = randomLargeIntArray.slice();
    localNegativeIntArray = randomNegativeIntArray.slice();
    localCharArray = randomCharArray.slice();
  })

  it('bubbleSort should be a function', () => {
    expect(bubbleSort).to.exist;
  })

  it('bubbleSort should sort localSmallIntArray', () => {
    jsSortedArray = Array.from(localSmallIntArray).sort(function (a, b) { return a - b; });
    let mySortedArray = bubbleSort(localSmallIntArray);

    expect(mySortedArray).to.deep.equal(jsSortedArray);

    console.log('        Unsorted Small Int Array: ', randomSmallIntArray);
    console.log('        Sorted Small Int using Array.sort(): ', jsSortedArray);
    console.log('        Sorted Small Int using Bubble Sort: ', mySortedArray);
  })

  it('bubbleSort should sort localMediumIntArray', () => {
    jsSortedArray = Array.from(localMediumIntArray).sort(function (a, b) { return a - b; });
    expect(bubbleSort(localMediumIntArray)).to.deep.equal(jsSortedArray);
  })

  it('bubbleSort should sort localLargeIntArray', () => {
    jsSortedArray = Array.from(localLargeIntArray).sort(function (a, b) { return a - b; });
    expect(bubbleSort(localLargeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('bubbleSort should sort localNegativeIntArray', () => {
    jsSortedArray = Array.from(localNegativeIntArray).sort(function (a, b) { return a - b; });
    expect(bubbleSort(localNegativeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('bubbleSort should sort localCharArray', () => {
    jsSortedArray = Array.from(localCharArray).sort();
    expect(bubbleSort(localCharArray)).to.deep.equal(jsSortedArray);
  })

})









describe('Insertion Sort', () => {

  let localSmallIntArray;
  let localMediumIntArray;
  let localLargeIntArray;
  let localNegativeIntArray;
  let localCharArray;

  before(function() {
    localSmallIntArray = randomSmallIntArray.slice();
    localMediumIntArray = randomMediumIntArray.slice();
    localLargeIntArray = randomLargeIntArray.slice();
    localNegativeIntArray = randomNegativeIntArray.slice();
    localCharArray = randomCharArray.slice();
  })

  it('insertionSort should be a function', () => {
    expect(insertionSort).to.exist;
  })

  it.only('insertionSort should sort localSmallIntArray', () => {
    jsSortedArray = Array.from(localSmallIntArray).sort(function (a, b) { return a - b; });
    let mySortedArray = insertionSort(localSmallIntArray);

    expect(mySortedArray).to.deep.equal(jsSortedArray);

    console.log('        Unsorted Small Int Array: ', randomSmallIntArray);
    console.log('        Sorted Small Int using Array.sort(): ', jsSortedArray);
    console.log('        Sorted Small Int using Insertion Sort: ', mySortedArray);
  })

  it('insertionSort should sort localMediumIntArray', () => {
    jsSortedArray = Array.from(localMediumIntArray).sort(function (a, b) { return a - b; });
    expect(insertionSort(localMediumIntArray)).to.deep.equal(jsSortedArray);
  })

  it('insertionSort should sort localLargeIntArray', () => {
    jsSortedArray = Array.from(localLargeIntArray).sort(function (a, b) { return a - b; });
    expect(insertionSort(localLargeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('insertionSort should sort localNegativeIntArray', () => {
    jsSortedArray = Array.from(localNegativeIntArray).sort(function (a, b) { return a - b; });
    expect(insertionSort(localNegativeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('insertionSort should sort localCharArray', () => {
    jsSortedArray = Array.from(localCharArray).sort();
    expect(insertionSort(localCharArray)).to.deep.equal(jsSortedArray);
  })

})









describe('Merge Sort', () => {

  let localSmallIntArray;
  let localMediumIntArray;
  let localLargeIntArray;
  let localNegativeIntArray;
  let localCharArray;

  before(function() {
    localSmallIntArray = randomSmallIntArray.slice();
    localMediumIntArray = randomMediumIntArray.slice();
    localLargeIntArray = randomLargeIntArray.slice();
    localNegativeIntArray = randomNegativeIntArray.slice();
    localCharArray = randomCharArray.slice();
  })


  it('merge.sortArray should be a function', () => {
    expect(merge.sortArray).to.exist;
  })

  it('merge.combineTwoSortedArrays should be a function', () => {
    expect(merge.combineTwoSortedArrays).to.exist;
  })


  it('merge.combineTwoSortedArrays should merge 2 sorted arrays', () => {
    let array1 = [1, 3, 6, 6, 7, 7, 8, 8];
    let array2 = [0, 1, 4, 8, 9];

    let array3Js = array1.concat(array2);
    array3Js = array3Js.sort(function (a, b) {  return a - b;  });

    let array3Me = merge.combineTwoSortedArrays(array1, array2);

    expect(array3Me).to.deep.equal(array3Js);
  })


  it('merge.sortArray should sort localSmallIntArray', () => {
    jsSortedArray = Array.from(localSmallIntArray).sort(function (a, b) { return a - b; });
    let mySortedArray = merge.sortArray(localSmallIntArray);

    expect(mySortedArray).to.deep.equal(jsSortedArray);

    console.log('        Unsorted Small Int Array: ', randomSmallIntArray);
    console.log('        Sorted Small Int using Array.sort(): ', jsSortedArray);
    console.log('        Sorted Small Int using Merge Sort: ', mySortedArray);
  })

  it('merge.sortArray should sort localMediumIntArray', () => {
    jsSortedArray = Array.from(localMediumIntArray).sort(function (a, b) { return a - b; });
    expect(merge.sortArray(localMediumIntArray)).to.deep.equal(jsSortedArray);
  })

  it('merge.sortArray should sort localLargeIntArray', () => {
    jsSortedArray = Array.from(localLargeIntArray).sort(function (a, b) { return a - b; });
    expect(merge.sortArray(localLargeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('merge.sortArray should sort localNegativeIntArray', () => {
    jsSortedArray = Array.from(localNegativeIntArray).sort(function (a, b) { return a - b; });
    expect(merge.sortArray(localNegativeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('merge.sortArray should sort localCharArray', () => {
    jsSortedArray = Array.from(localCharArray).sort();
    expect(merge.sortArray(localCharArray)).to.deep.equal(jsSortedArray);
  })

})









describe('Quick Sort', () => {

  let localSmallIntArray;
  let localMediumIntArray;
  let localLargeIntArray;
  let localNegativeIntArray;
  let localCharArray;

  before(function() {
    localSmallIntArray = randomSmallIntArray.slice();
    localMediumIntArray = randomMediumIntArray.slice();
    localLargeIntArray = randomLargeIntArray.slice();
    localNegativeIntArray = randomNegativeIntArray.slice();
    localCharArray = randomCharArray.slice();
  })

  it('quickSort should be a function', () => {
    expect(quickSort).to.exist;
  })

  it('quickSort should sort localSmallIntArray', () => {
    jsSortedArray = Array.from(localSmallIntArray).sort(function (a, b) { return a - b; });
    let mySortedArray = quickSort(localSmallIntArray);

    expect(mySortedArray).to.deep.equal(jsSortedArray);

    console.log('        Unsorted Small Int Array: ', randomSmallIntArray);
    console.log('        Sorted Small Int using Array.sort(): ', jsSortedArray);
    console.log('        Sorted Small Int using Quick Sort: ', mySortedArray);
  })

  it('quickSort should sort localMediumIntArray', () => {
    jsSortedArray = Array.from(localMediumIntArray).sort(function (a, b) { return a - b; });
    expect(quickSort(localMediumIntArray)).to.deep.equal(jsSortedArray);
  })

  it('quickSort should sort localLargeIntArray', () => {
    jsSortedArray = Array.from(localLargeIntArray).sort(function (a, b) { return a - b; });
    expect(quickSort(localLargeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('quickSort should sort localNegativeIntArray', () => {
    jsSortedArray = Array.from(localNegativeIntArray).sort(function (a, b) { return a - b; });
    expect(quickSort(localNegativeIntArray)).to.deep.equal(jsSortedArray);
  })

  it('quickSort should sort localCharArray', () => {
    jsSortedArray = Array.from(localCharArray).sort();
    expect(quickSort(localCharArray)).to.deep.equal(jsSortedArray);
  })

})
