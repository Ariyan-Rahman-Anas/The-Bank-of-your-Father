//code for Deposit and Balance
let depositBtn = document.getElementById("deposit-btn").addEventListener("click", function(){
    let depositInput = document.getElementById("deposit-input");
    let depositInputValue = depositInput.value;
    let convertedDepositInputValue = parseFloat(depositInputValue);

    if(convertedDepositInputValue >= 0){
        let initialDeposit = document.getElementById("total-deposit")
        let initialDepositValue  = initialDeposit.innerText;
        let convertedInitialDepositText = parseFloat(initialDepositValue);
        let totalDepositAmount = convertedInitialDepositText + convertedDepositInputValue;
        initialDeposit.innerText = totalDepositAmount;

        let initialBalance = document.getElementById("total-balance");
        let initialBalanceValue = initialBalance.innerText;
        let convertedInitialBalanceText = parseFloat(initialBalanceValue);
        let totalBalanceAmount = convertedInitialBalanceText + convertedDepositInputValue;
        initialBalance.innerText = totalBalanceAmount;

        depositInput.value = "";
    }
    else{
        depositInput.value = "";
        alert("Enter valid amount")
    }
})

//code for Withdraw and Balance
let withdrawBtn = document.getElementById("withdraw-btn").addEventListener("click", function(){
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawInputValue = withdrawInput.value;
    let convertedWithdrawInputVAlue = parseFloat(withdrawInputValue)

    if(convertedWithdrawInputVAlue >= 0){
        let initialWithdraw = document.getElementById("total-withdraw");
        let initialWithdrawValue = initialWithdraw.innerText;
        let convertedInitialWithdrawText = parseFloat(initialWithdrawValue);
        let totalWithdrawAmount = convertedInitialWithdrawText + convertedWithdrawInputVAlue;
        initialWithdraw.innerText = totalWithdrawAmount;

        let initialBalance = document.getElementById("total-balance");
        let initialBalanceValue = initialBalance.innerText;
        let convertedInitialBalanceText = parseFloat(initialBalanceValue);
        let totalBalanceAmount = convertedInitialBalanceText - convertedWithdrawInputVAlue;
        initialBalance.innerText = totalBalanceAmount;

        if(initialBalance.innerText <= 10){
            document.getElementById("greeting").innerText = "You can not withdraw right now, please Deposit few amount.";
            let withdrawBtn = document.getElementById("withdraw-btn");
            withdrawBtn.innerText = "Button Disabled"
            withdrawBtn.setAttribute("disabled", "")
            alert("You can not withdraw right now, please Deposit few amount.");
        }
        withdrawInput.value = "";
    }
    else{
        withdrawInput.value = ""
        alert("Enter valid amount")
    }
})

//code for log out button
let logOutBtn = document.getElementById("logOut-btn").addEventListener("click", function(){
    window.location.href = "index.html"
})