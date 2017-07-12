import { expect, assert } from 'chai';
import quickSort from '../scripts/quickSort';

describe('quickSort', () => {
  let randomArray;
  let jsSortedArray;
  //let unSortedArray;

  before(function() {
    randomArray = [];
    for(let i = 0; i < 100; i++) {
      randomArray.push(Math.floor(Math.random() * (10 - 1)) + 1);
    }
  })

  beforeEach(function() {
    //unSortedArray = randomArray.slice();
    jsSortedArray = Array.from(randomArray).sort();
  })

  it('should preload with an array of 10 items', () => {
    expect(randomArray).to.have.lengthOf(100);
  })

  it('should be a function', () => {
    expect(quickSort).to.exist;
  })

  it('should start out unsorted', () => {
    expect(randomArray).to.not.deep.equal(jsSortedArray);
  })

  it('should return a sorted array', () => {
    let mySortedArray = quickSort(randomArray);
    // console.log('unsorted:', unSortedArray);
    // console.log('my sort:', mySortedArray);
    // console.log('js sort:', jsSortedArray);
    expect(mySortedArray).to.deep.equal(jsSortedArray);
  })

})
