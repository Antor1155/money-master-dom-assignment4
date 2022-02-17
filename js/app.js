
//function to triggering the error messages 
function errorMessage(errorMsg){
    document.getElementById('errorDiv').style.display = 'block';
    const message = document.getElementById("errorType")
    message.innerText = errorMsg;
}
// error click handler
document.getElementById('errorOk').addEventListener('click', function(){
    document.getElementById('errorDiv').style.display = 'none';
})

// error messages 
const errorType1 = "enter numbers, character and empty place doesn't work";
const errorType2 = "enter positve number, negative number doesn't work";
const errorType3 = "check, your expense is more than income";
const errorType4 = "check, your saving target is more than remaining balance";

// function of validating the input and trigger error message 
function numberValidate(string){
    num = parseFloat(string);
    if(isNaN(num)){
        errorMessage(errorType1);
    }
    else if(num < 0){
        errorMessage(errorType2);
        return 'error';
    }
    return num;
}

// function to get value from any given id 
function idToValue(idName){
    const value = document.getElementById(idName).value;
    valueInNum = numberValidate(value)
    return valueInNum;
}

// function to set value in cost and balance fields 
function setInnerText(idName, amount){
    document.getElementById(idName).innerText = amount;
}

// making income and initial balance variable to use letter 
let income = null;
let initialBalance = null;

// calicking the calculate button and setting values to inital cost and balance
document.getElementById('calculate').addEventListener('click',function(){
    // getting value form all input field 
    income = idToValue("income");
    const foodCost = idToValue("expenses1");
    const rentCost = idToValue("expenses2");
    const clothesCost = idToValue("expenses3");

    const initialCost = foodCost + rentCost + clothesCost;
    initialBalance = income - initialCost ;

    if(initialCost < income){
        // initial expenses
        setInnerText('totalExpenses', initialCost);
        // initial balance
        setInnerText('initialBalance', initialBalance);
    }
    else if(income < initialCost && income > 0){
        errorMessage(errorType3);
    }
})

// clicking the saving button and setting final values
document.getElementById('saveButton').addEventListener('click', function(){
    const savingPercent = idToValue("saving-percent");
    const savingAmount = income * (savingPercent/100);
    const remainingBalance = initialBalance - savingAmount;
    
    // validating the saving amount 
    if(savingAmount < initialBalance){
        // saving amount
        setInnerText('savingAmount', savingAmount);
        // final balance
        setInnerText('remainingBalance', remainingBalance);
    }
    else{
        errorMessage(errorType4);
    }
})
