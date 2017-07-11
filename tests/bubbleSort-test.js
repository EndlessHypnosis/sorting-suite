import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('bubbleSort', () => {
  let randomArray;
  let jsSortedArray;
  //let unSortedArray;

  before(function() {
    randomArray = [];
    for(let i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random() * (10 - 1)) + 1);
    }
  })

  beforeEach(function() {
    //unSortedArray = randomArray.slice();
    jsSortedArray = Array.from(randomArray).sort();
  })

  it.skip('should preload with an array of 10 items', () => {
    expect(randomArray).to.have.lengthOf(10);
  })

  it.skip('should be a function', () => {
    expect(bubbleSort).to.exist;
  })

  it.skip('should start out unsorted', () => {
    expect(randomArray).to.not.deep.equal(jsSortedArray);
  })

  it.skip('should return a sorted array', () => {
    let mySortedArray = bubbleSort(randomArray);
    // console.log('unsorted:', unSortedArray);
    // console.log('my sort:', mySortedArray);
    // console.log('js sort:', jsSortedArray);
    expect(mySortedArray).to.deep.equal(jsSortedArray);
  })

})
