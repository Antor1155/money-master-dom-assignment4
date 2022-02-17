function elementToValue(input){
    const val = document.getElementById(input);
    return val;
}
document.getElementById('calculate').addEventListener("click", function (){
    let x = document.getElementById('income').value;
    console.log(x);
})
