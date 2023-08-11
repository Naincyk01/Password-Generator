let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerset = "abcdefghijklmnopqrstuvwxyz"
let numberset = "1234567890"
let symbolset = "!@#$%^&*_"

let passBox = document.getElementById("output")
let generatebtn = document.getElementById("generate");
let lowerCaseInput = document.getElementById("lowercase");
let upperCaseInput = document.getElementById("uppercase");
let numberInput = document.getElementById("numbers");
let specialCharsInput = document.getElementById("symbols");
let totalchar = document.getElementById("slider");
let copyInput = document.getElementById("icons");
let refresh = document.getElementById("strength");

const updateSlider = () => {
    document.getElementById("numb").innerText=totalchar.value;
}
updateSlider();
totalchar.addEventListener("input",updateSlider)

function CopyToClipboard(value){
    navigator.clipboard.writeText(value);
}

function RefreshPage(){
    window.location.reload()
}
copyInput.addEventListener("click",function(){
    CopyToClipboard(passBox.innerText)
})
refresh.addEventListener("click",function(){
    RefreshPage()
})
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}
const generatePassword = (password = "") => {
if(upperCaseInput.checked){
    password += getRandomData(upperset)
}
if(lowerCaseInput.checked){
    password += getRandomData(lowerset)
}
if(numberInput.checked){
    password += getRandomData(numberset)
}
if(specialCharsInput.checked){
    password += getRandomData(symbolset)
}
if(password.length< totalchar.value){
    return generatePassword(password)
}
   passBox.innerText = cutString(password, totalchar.value);
}
generatebtn.addEventListener("click",function(){
    generatePassword();
})


function cutString(str, num){
if(str.length>num){
    let subStr = str.substring(0,num);
    return subStr;
}
else{
    return str;
}
}









