/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  console.log(`Bricks:${bricks} Ladders:${ladders} `);
  /**
First we want to check the differences for each num in array
then we want to use those differences to make an educated decision
So if our difference is one of the greatest elements in our array use a ladder else use bricks
**/

  let differences = [];
  for (let i = 1; i < heights.length; i++) {
    let curr = heights[i - 1];
    let next = heights[i];
    let diff = next - curr;
    if (diff >= 0) {
      differences.push(diff);
    } else {
      differences.push(-1);
    }
  }
  let sortedDiff = differences.slice(); //Make copy array
  sortedDiff.sort((a, b) => b - a);
  //We want the num of the largest elements == ladders elements
  let maxHeap = [];
  for (let i = 0; i < ladders; i++) {
    maxHeap.push(sortedDiff[i]);
  }

  console.log(maxHeap, "maxHeap");
  let numOfTraversed = 1;

  for (let i = 1; i < heights.length; i++) {
    let currDifference = differences[i - 1];

    let curr = heights[i - 1];
    let next = heights[i];
    if (currDifference[i] === -1) {
      //If the curr building is taller
      //Advnace one position
      numOfTraversed++;
    } else {
      let diff = next - curr;
      let enoughBricks = false;
      if (bricks - diff >= 0) {
        enoughBricks = true;
      }
      //If curr isn't taller than next we want to choose a method to climb up
      if (maxHeap.includes(currDifference) && ladders > 0) {
        ladders -= 1;
        numOfTraversed++;
        continue;
      } else if (enoughBricks) {
        //use bricks

        bricks -= differences[i];
        numOfTraversed++;
        continue;
      } else if (!enoughBricks) {
        //If we didn't have enough ladders and if we didn't have enough bricks we want ot leave the loop
        break;
      }
    }
  }
  return numOfTraversed;
};


const furthestBuilding2 = (heights, bricks, ladders) => {
    let n = heights.length;
    let diff = [];
    for (let i = 0; i + 1 < n; i++) {
        diff.push(heights[i + 1] - heights[i]);
    }
    let tmp = [...diff].sort((a, b) => b - a).filter(x => x > 0); // rankings
    let cnt = 0;
    for (let i = 0; i < diff.length; i++) {
        if (diff[i] <= 0)  { // no need to use bricks or ladders
            cnt++;
            continue;
        }
        if ((tmp.indexOf(diff[i]) + 1) <= ladders) { // greedy, only when the difference ranking the top, then use ladders (example, if have 1 ladder, need to rank 1, 2 ladders, ranking [1, 2] ...). Otherwise use bricks.
            if (ladders > 0) {
                ladders--;
                cnt++;
            }
        } else {
            if (bricks - diff[i] >= 0) {
                bricks -= diff[i];
                cnt++;
            } else {
                if (ladders > 0) {
                    ladders--;
                    cnt++;
                } else {
                    break;  // use out ladders and bricks
                }
            }
        }
    }
    return cnt;
};