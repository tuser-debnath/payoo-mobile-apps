// Add Money Functionality
const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bankName = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText,
    );

    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    if (addPin !== validPin) {
      alert("Please provide valid PIN");
      return;
    }

    const newAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

//   Function Toggling

document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cash-out-parent").style.display = "none";
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});

//   Cash Out Functionality

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value,
  );
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );

  if (agentNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }

  if (withdrawPin !== validPin) {
    alert("Please provide valid PIN");
    return;
  }

  const newAvailableBalance = availableBalance - withdrawAmount;

  document.getElementById("available-balance").innerText = newAvailableBalance;
});
