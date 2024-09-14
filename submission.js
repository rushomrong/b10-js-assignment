function calculateTax(income, expenses) {
  const monthlyIncome = income;
  const monthlyExpense = expenses;

  if (monthlyIncome >= 0 && monthlyExpense >= 0) {
    const difference = monthlyIncome - monthlyExpense;
    const taxAmount = difference * 0.2;
    return taxAmount;
  } else if (monthlyIncome < 0 || monthlyExpense < 0) {
    return "Invalid Input";
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }
  return false;
}

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

function sendNotification(email) {
  if (email.indexOf("@") !== -1) {
    let divide = email.split("@");
    let username = divide[0];
    let domainname = divide[1];
    return `${username} sent you an email from ${domainname}`;
  } else {
    return "Invalid Email";
  }
}
