function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalWaitTimes = 0;
  for (let time of waitingTimes) {
    totalWaitTimes = totalWaitTimes + time;
  }

  const totalAverageTimes = Math.round(totalWaitTimes / waitingTimes.length);
  const totalSerialLeft = serialNumber - 1;
  const totalCandidateLeft = totalSerialLeft - waitingTimes.length;
  const waitTimeRemaining = totalAverageTimes * totalCandidateLeft;
  return waitTimeRemaining;
}

const totalTimeRemain = waitingTime([3, 5, 7, 11, 6], 10);
const totalTimeRemain2 = waitingTime([13, 2], 6);
const totalTimeRemain3 = waitingTime([13, 2, 6, 7, 10], 6);
const totalTimeRemain4 = waitingTime([6], 4);
const totalTimeRemain5 = waitingTime(7, 10);
const totalTimeRemain6 = waitingTime("[6,2]", 9);
const totalTimeRemain7 = waitingTime([7, 8, 3, 4, 5], "9");
console.log(totalTimeRemain);
console.log(totalTimeRemain2);
console.log(totalTimeRemain3);
console.log(totalTimeRemain4);
console.log(totalTimeRemain5);
console.log(totalTimeRemain6);
console.log(totalTimeRemain7);
