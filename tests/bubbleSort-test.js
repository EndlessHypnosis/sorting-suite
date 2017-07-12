import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('bubbleSort', () => {
  let randomArray;
  let jsSortedArray;
  //let unSortedArray;

  before(function() {
    randomArray = [];
    for(let i = 0; i < 100; i++) {
      randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
    jsSortedArray = Array.from(randomArray).sort(function (a, b) {  return a - b;  });
  })

  beforeEach(function() {
    //unSortedArray = randomArray.slice();
    // jsSortedArray = Array.from(randomArray).sort(function (a, b) {  return a - b;  });
  })

  it('should preload with an array of 100 items', () => {
    expect(randomArray).to.have.lengthOf(100);
  })

  it('should be a function', () => {
    expect(bubbleSort).to.exist;
  })

  it('should start out unsorted', () => {
    expect(randomArray).to.not.deep.equal(jsSortedArray);
  })

  it('should return a sorted array', () => {
    let mySortedArray = bubbleSort(randomArray);
    // console.log('unsorted:', unSortedArray);
    // console.log('my sort:', mySortedArray);
    // console.log('js sort:', jsSortedArray);
    expect(mySortedArray).to.deep.equal(jsSortedArray);
  })

})
