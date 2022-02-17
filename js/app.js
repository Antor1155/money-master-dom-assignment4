// function of validating the input and error message 
function numberValidate(string){
    return parseInt(string);
}

// function to get value from any given id 
function idToValue(idName){
    const value = document.getElementById(idName).value;
    return numberValidate(value);
}

// getting value form all input field 

const income = idToValue("income");

const foodCost = idToValue("expenses1");
const rentCost = idToValue("expenses2");
const clothesCost = idToValue("expenses3");

const savingPercent = idToValue("saving-percent")

// calculating initial cost and income 
const initialCost = foodCost + rentCost + clothesCost;
document.getElementById("totalExpenses").innerText = initialCost;

console.log(income, foodCost, rentCost, clothesCost);