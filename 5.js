console.log('speed-limits');
const SPEEDLIMIT = 100;
const KMPERPOINT = 9;
function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
    return ('speed minimum 80!');
  } else {
    let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoint < 10) {
      return ('Speed Limit Crossed by Penalty Point: ' + penaltyPoint);
    } else {
      return ('drive safe');
    }
  }
}

let checkPoin1 = checkSpeedLimit(30);
console.log(checkPoin1);

let checkPoin2 = checkSpeedLimit(50);
console.log(checkPoin2);

let checkPoin3 = checkSpeedLimit(65);
console.log(checkPoin3);

let checkPoin4 = checkSpeedLimit(99);
console.log(checkPoin4);

let checkPoin5 = checkSpeedLimit(120);
console.log(checkPoin5);