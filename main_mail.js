// emails list
var emailList = ["chiara@gmail.com", "mario@gmail.com", "paola@gmail.com", "lorenzo@gmail.com", "carmen@yahoo.com", "francisco@yahoo.com", "lisa@yahoo.com", "federico@yahoo.com", "leonardo@yahoo.com" ];
var yourEmail = prompt ("What is your email address?")
console.log(yourEmail);
// alert( "What is your email address");

if (emailList.includes(yourEmail) === true ){
    console.log("Welcome back! You are allowed to acces.");
    alert("Welcome back! You are allowed to acces.");
}else{
    console.log("Sorry, you are not allowed to acces. Check again your email address");
    alert("Sorry, you are not allowed to acces. Check again your email address");
}