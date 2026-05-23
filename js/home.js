// Add Money Functionality
const validPin = 1234;
const transactionData = [];

// Function To Get Input Field Value With ParseInt
function getInputValueNumber(id) {
  const inputFieldValue = parseInt(document.getElementById(id).value);
  return inputFieldValue;
}

// Function To Get Input Field Value
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// Function To Get Inner Text
function getInnerText(id) {
  const innerTextValue = parseInt(document.getElementById(id).innerText);
  return innerTextValue;
}

// Function To Set Inner Text
function setInnerText(value) {
  const setInnerTextValue = document.getElementById("available-balance");
  setInnerTextValue.innerText = value;
  return setInnerTextValue;
}

// Function For Toggling
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Function For Toggling Button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Add Money 2nd Time Practice
document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankName = getInputValue("bank-name");
  const accountNumber = getInputValue("account-number");
  const amount = getInputValueNumber("amount");
  if(amount <= 0){
    alert("Invalid Amount")
    return
  }
  const addPin = getInputValueNumber("add-pin");
  const availableBalance = getInnerText("available-balance");
  if (accountNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }
  if (addPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  const newAvailableBalance = availableBalance + amount;
  setInnerText(newAvailableBalance);

  const data = {
    name: "Add Money",
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

//   Cash Out Functionality
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = getInputValue("agent-number");
  const withdrawAmount = getInputValueNumber("withdraw-amount");
  const withdrawPin = getInputValueNumber("withdraw-pin");
  const availableBalance = getInnerText("available-balance");
  if(withdrawAmount <=0 || withdrawAmount > availableBalance){
    alert("Invalid Amount")
    return;
  }
  if (agentNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }
  if (withdrawPin !== validPin) {
    alert("Please provide valid PIN");
    return;
  }
  const newAvailableBalance = availableBalance - withdrawAmount;
  setInnerText(newAvailableBalance);

  const data = {
    name: "Cash Out",
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

//   Transfer Money Functionality
document.getElementById("send-btn").addEventListener("click", function () {
  const userNumber = getInputValue("user-number");
  const transferAmount = getInputValueNumber("transfer-amount");
  const transferPin = getInputValueNumber("transfer-pin");
  const availableBalance = getInnerText("available-balance");
  
  if(transferAmount <= 0 || transferAmount > availableBalance){
    alert("Invalid Amount")
    return;
  }
  if (userNumber.length < 11) {
    alert("Please provide valid user number");
    return;
  }
  if (transferPin !== validPin) {
    alert("Please provide valid PIN");
    return;
  }
  const newAvailableBalance = availableBalance - transferAmount;
  setInnerText(newAvailableBalance);

  const data = {
    name: "Transfer Money",
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// Get Bonus Functionality
document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusAmount = getInputValueNumber("bonus-amount");
  const availableBalance = getInnerText("available-balance");
  
  if(bonusAmount <= 0 || bonusAmount > availableBalance){
    alert("Invalid Amount")
    return;
  }
  const newAvailableBalance = availableBalance + bonusAmount;
  setInnerText(newAvailableBalance);

  const data = {
    name: "Get Bonus",
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

//   Pay Functionality
document.getElementById("pay-btn").addEventListener("click", function () {
  const payBankName = getInputValue("pay-bank-name");
  const payAccountNumber = getInputValue("pay-account-number");
  const payAmount = getInputValueNumber("pay-amount");
  if(payAmount <= 0){
    alert("Invalid Amount")
    return
  }
  const payPin = getInputValueNumber("pay-pin");
  const availableBalance = getInnerText("available-balance");
  
  if(payAmount <= 0 || payAmount > availableBalance){
    alert("Invalid Amount")
    return;
  }
  if (payAccountNumber.length < 11) {
    alert("Please provide valid biller number");
    return;
  }
  if (payPin !== validPin) {
    alert("Please provide valid PIN");
    return;
  }
  const newAvailableBalance = availableBalance - payAmount;
  setInnerText(newAvailableBalance);

  const data = {
    name: "Pay Bill",
    time: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// Transaction Functionality
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container",
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
               <div
            class="flex justify-between items-center p-4 bg-white rounded-xl mt-3"
          >
            <div class="flex items-center">
              <div class="p-4 bg-[#F4F5F7] rounded-full">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h3 class="text-[16px] font-semibold text-[#080808b3]">
                  ${data.name}
                </h3>
                <p class="text-[12px] text-[#080808b3]">${data.time}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis rotate-90"></i>
          </div>
    `;
      transactionContainer.appendChild(div);
    }
  });



//   Function Toggling
document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-btn");
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleButtonToggle("cash-out-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleButtonToggle("transfer-btn");
});

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("get-bonus-btn");
});

document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("pay-bill-btn");
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleButtonToggle("transaction-btn");
  });
