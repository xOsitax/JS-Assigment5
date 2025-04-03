myaccount = {
  accountName: "Yessenia Carlos",
  balance: 1000,
  getBalance: function () {
    console.log("Your balance is: " + this.balance);
  },
  deposit: function (amount) {
    this.balance += amount;
    console.log("You have deposited: " + amount);
    this.getBalance();
  },
  withdrawal: function (amount) {
    this.balance -= amount;
    console.log("You have withdrawn: " + amount);
    this.getBalance();
  },
  getAccountName: function () {
    console.log("Your account name is: " + this.accountName);
  },
  accountError: function () {
    console.log("There is an error with your account");
  },
  exitAccount: function () {
    console.log("You have exited your account");
  },
};

function atm() {
  const message = parseFloat(
    prompt(
      "Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdraw 4.) Get account Name 5.) Exit Account"
    )
  );

  switch (message) {
    case 1:
      myaccount.getBalance();
      break;
    case 2:
      const depositAmount = parseFloat(prompt("Enter amount to deposit: "));
      if (isNaN(depositAmount) || depositAmount <= 0) {
        console.log("Please enter a valid amount");
      } else {
        myaccount.deposit(depositAmount);
      }
      break;
    case 3:
      const withdrawalAmount = parseFloat(prompt("Enter amount to withdraw: "));
      if (
        isNaN(withdrawalAmount) ||
        withdrawalAmount <= 0 ||
        withdrawalAmount > myaccount.balance
      ) {
        console.log("Please enter a valid amount");
      } else {
        myaccount.withdrawal(withdrawalAmount);
      }
      break;
    case 4:
      myaccount.getAccountName();
      break;
    case 5:
      myaccount.exitAccount();
      break;
    default:
      myaccount.accountError();
      break;
  }
}
