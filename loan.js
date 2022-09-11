
let fName=document.getElementById("fName")
let firstName=document.getElementById("firstName")
let fnameError=document.getElementById("fnameError")
let sName=document.getElementById("sName")
let surName=document.getElementById("surName")
let snameError=document.getElementById("snameError")
let accNum=document.getElementById("accNum")
let accnumError=document.getElementById("accnumError")
let bank=document.getElementById("bank")
let acctype=document.getElementById("acctype")
let curAccount=document.getElementById("curAccount")
let acctypeError=document.getElementById("acctypeError")
let accBal=document.getElementById("accBal")
let accB=document.getElementById("accB")
let accHistory=document.getElementById("accHistory")
let crHistory=document.getElementById("crHistory")
let crhistoryError=document.getElementById("crhistoryError")
let rLoan=document.getElementById("rLoan")
let amtRequested=document.getElementById("amtRequested")
let loanamtError=document.getElementById("loanamtError")
let depositDate=document.getElementById("depositDate")
let lastDeposit=document.getElementById("lastDeposit")
let dateError=document.getElementById("dateError")
let lastLoan=document.getElementById("lastLoan")
let loanDate=document.getElementById("loanDate")
let inputError=document.getElementById("inputError")
let payP=document.getElementById("payP")
let payPeriod=document.getElementById("payPeriod")
let payError=document.getElementById("payError")
let creditBtn=document.getElementById("creditBtn")
let savAccount=document.getElementById("savAccount")
let accbError=document.getElementById("accbError")
let messageT=document.getElementById("messageT")
let point=0

creditBtn.addEventListener("click", function(){
    validateform()
})

function validateform(){
    if(firstName.value==""){
        fnameError.innerHTML="This field is required";
    }else{
        fnameError.innerHTML=""
    }
    if(surName.value==""){
        snameError.innerHTML="This field is required";
    }else {
        snameError.innerHTML=""
    }
    if(accNum.value==""){
        accnumError.innerHTML="This field is required";
    }else{
        accnumError.innerHTML=""
    }
    if(acctype.value==""){
        acctypeError.innerHTML="This field is required";
    }else{
        acctypeError.innerHTML=""
    }
    if(accB.value==""){
        accbError.innerHTML="This field is required";
    }else{
        accbError.innerHTML=""
    }
    if(crHistory.value=="6"){
        crhistoryError.innerHTML="This field is required";
    }else{
        crhistoryError.innerHTML=""
    }
    if(amtRequested.value==""){
        loanamtError.innerHTML="This field is required";
    }else{
        loanamtError.innerHTML=""
    }
    if(lastDeposit.value==""){
        dateError.innerHTML="This field is required";
    }else{
        dateError.innerHTML=""
    }
    if(loanDate.value==""){
        inputError.innerHTML="This field is required";
    }else{
        inputError.innerHTML=""
    }
    if(payPeriod.value==""){
        payError.innerHTML="This field is required";
    }else{
        payError.innerHTML=""
    }
    if(firstName.value!="" && surName.value!="" && accNum.value!="" && acctype.value!="" && accB.value!="" && crHistory.value!="" && amtRequested.value!="" && lastDeposit.value!="" && loanDate.value!="" && payPeriod.value!=""){
        acceptValues()
    }
}

function acceptValues(){
    accB = accB.value
    amtRequested = amtRequested.value
    process()
}
function process(){
    
    if(accB > amtRequested){
        point += 10
    }else {
        point -= 10
    }
    if(crHistory.value == "6" || crHistory.value =="7"){
        point += 10
    }else{
        point -= 10
    }
    if(lastDeposit.value=="1" || lastDeposit.value=="2" || lastDeposit.value=="3"){
        point += 5
    }else{
        point -= 0
    }
    if(loanDate.value=="7" || loanDate.value=="8"){
        point += 10
    }else{
        point -= 0  
    }
    if(payPeriod.value=="6" || payPeriod.value=="7"){
        point -= 0
    }else{
        point += 5 
        console.log(point) 
    }
    if(acctype.value=="1"){
        point += 10
    }else{
        point += 5  

    }

    total()
}
function total(){
    let message
    if (point > 30){
        message = "Account has an eligibility score above 30 and can access loan"
        messageT.innerHTML = message
    }else{
        message = "Account has an eligibility score below 30 and not credible for a loan"
        messageT.innerHTML = message

    }
}


