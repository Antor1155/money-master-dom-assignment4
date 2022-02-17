// function of validating the input and error message 
// triggering the error messages 
function numberValidate(string){
    return parseFloat(string);
}

// function to get value from any given id 
function idToValue(idName){
    const value = document.getElementById(idName).value;
    return numberValidate(value);
}

// function to set value in cost and balance fields 
function setInnerText(idName, amount){
    document.getElementById(idName).innerText = amount;
}

// making income and initial balance variable to use letter 
let initialBalance = null;
let income = null;


// calicking the calculate button and setting values
document.getElementById('calculate').addEventListener('click',function(){
    // getting value form all input field 
    income = idToValue("income");
    const foodCost = idToValue("expenses1");
    const rentCost = idToValue("expenses2");
    const clothesCost = idToValue("expenses3");

    const initialCost = foodCost + rentCost + clothesCost;
    initialBalance = income - initialCost ;

    // initial expenses
    setInnerText('totalExpenses', initialCost);
    // initial balance
    setInnerText('initialBalance', initialBalance);
})

// ************************************


// clicking the saving button and setting final values
document.getElementById('saveButton').addEventListener('click', function(){
    const savingPercent = idToValue("saving-percent");
    const savingAmount = income * (savingPercent/100);
    const remainingBalance = initialBalance - savingAmount;

    // saving amount
    setInnerText('savingAmount', savingAmount);
    // final balance
    setInnerText('remainingBalance', remainingBalance);
})



// calculating cost, income



// setting values to the costs and balance *************************


// console.log(income, foodCost, rentCost, clothesCost);