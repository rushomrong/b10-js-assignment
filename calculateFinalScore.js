function calculateFinalScore(obj) {
  let name = "string";
  let testScore = 50;
  let schoolGrade = 30;
  let isFFamily = "boolean";

  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }

  name = obj.name;
  testScore = obj.testScore;
  schoolGrade = obj.schoolGrade;
  isFFamily = obj.isFFamily;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    testScore > 50 ||
    testScore < 0 ||
    typeof schoolGrade !== "number" ||
    schoolGrade > 30 ||
    schoolGrade < 0 ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}

const resultOut = calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
});

const resultOut2 = calculateFinalScore({
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
});

const resultOut3 = calculateFinalScore("hello");

const resultOut4 = calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
});

console.log(resultOut);
console.log(resultOut2);
console.log(resultOut3);
console.log(resultOut4);
