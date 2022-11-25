var userName = prompt("Please Enter Your Name : ");
var password = prompt("Enter Your Password : ");

if(userName == "admin" && password == "421$$"){
    alert("Welcome login success");
}
else if(userName == "admin" ){
    alert("You Entered a wrong password");
}
else if(password == "421$$"){
    alert("You Entered a wrong UserName");
}
else{
    alert("You entered a wrong userName and a wrong password");
}
