// import { expect, assert } from 'chai';
// import merge from '../scripts/mergeSort';
//
// describe('mergeSort', () => {
//   let randomArray;
//   let jsSortedArray;
//   //let unSortedArray;
//
//   before(function() {
//     randomArray = [];
//     for(let i = 0; i < 100; i++) {
//       randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
//     }
//     jsSortedArray = Array.from(randomArray).sort(function (a, b) {  return a - b;  });
//   })
//
//   beforeEach(function() {
//     //unSortedArray = randomArray.slice();
//     // jsSortedArray = Array.from(randomArray).sort(function (a, b) {  return a - b;  });
//   })
//
//   it('should preload with an array of 100 items', () => {
//     expect(randomArray).to.have.lengthOf(100);
//   })
//
//   it('should have function sortArray', () => {
//     expect(merge.sortArray).to.exist;
//   })
//
//   it('should have function combineTwoSortedArrays', () => {
//     expect(merge.combineTwoSortedArrays).to.exist;
//   })
//
//   it('should use combineTwoSortedArrays to merge 2 sorted arrays', () => {
//
//     var array1 = [1, 3, 6, 6, 7, 7, 8, 8];
//     var array2 = [0, 1, 4, 8, 9];
//     var array3Js = array1.concat(array2);
//     array3Js = array3Js.sort(function (a, b) {  return a - b;  });
//
//     var array3Me = merge.combineTwoSortedArrays(array1, array2);
//
//     expect(array3Me).to.deep.equal(array3Js);
//
//   })
//
//   it('should start out unsorted', () => {
//     expect(randomArray).to.not.deep.equal(jsSortedArray);
//   })
//
//   it('should return a sorted array', () => {
//     let mySortedArray = merge.sortArray(randomArray);
//     // console.log('unsorted:', unSortedArray);
//     // console.log('my sort:', mySortedArray);
//     // console.log('js sort:', jsSortedArray);
//     expect(mySortedArray).to.deep.equal(jsSortedArray);
//   })
//
// })
