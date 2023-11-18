function validateForm(){
var name1=document.getElementById("name").value;
console.log(name1);
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
// var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,2}$/;
// var em= /^[a-z0-9._%\-+]+@[a-z0-9.\-+]+\.[a-z]{2,3}$/;

if(name===null||name===""){
    alert("name cannot be blank");
}
else if(password.length<6){
    alert("password must be 6 digit value and ust contain number special character and alphabet");
}else if(email==="")
{
    alert("enter a valid email");
}
}