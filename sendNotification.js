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

const sendMail = sendNotification("zihad@gmail.com");
const sendMail2 = sendNotification("farhan34@yahoo.com");
const sendMail3 = sendNotification("nadim.naem5@outlook.com");
const sendMail4 = sendNotification("fahim234.hotmail.com");
const sendMail5 = sendNotification("sadia8icloud.com");

// Output results
console.log(sendMail);
console.log(sendMail2);
console.log(sendMail3);
console.log(sendMail4);
console.log(sendMail5);
