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

const checkOutPut = checkDigitsInName("Raj123");
const checkOutPut2 = checkDigitsInName("Suman");
const checkOutPut3 = checkDigitsInName("Name2024");
const checkOutPut4 = checkDigitsInName("!@#");
const checkOutPut5 = checkDigitsInName(["Raj"]);
console.log(checkOutPut);
console.log(checkOutPut2);
console.log(checkOutPut3);
console.log(checkOutPut4);
console.log(checkOutPut5);
