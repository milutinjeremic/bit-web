//var welcome = " Second Hello";
//console.log(welcome);

var test = function () {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
    console.log("width screen is: " + screen.width);
    console.log("max possible height is: " + screen.availHeight);
    console.log("url addres is " + location.href);
    console.log("domain name is"+location.hostname)
    console.log("protocol is--"+location.protocol)
    console.log("parts of url:"+location.search)

}
test();

var isOnline = function () {
console.log(navigator.onLine);
}
isOnline();

//location.reload();
// var redirect = function(){
//     location.href = "http://www.bgit.rs/";
// }
// redirect();

var saveInlocalStorage = function(key, value){
    localStorage.setItem(key, value);
}

saveInlocalStorage("sessionId", "45687454846453egdf564hd6gf5")

var saveInSesion = function(key, value){
    sessionStorage.setItem(key, value);
}

saveInSesion("hhhh", "uuuu");


var newBack = function(){
    history.back();

}

var newForward = function(){
    history.forward();
}

var goForward = function(n){
    history.go(n);
}

// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

alert('Zdravo Ivice');


var userInput = prompt('Da li zaista zelis da popijes mleko..?');

var userChoice = confirm('We will submit this answer now!' + userInput);

if(userChoice){
    alert('Ivica je popio mleko');
};



// function boo() { alert('Ivica je popio mleko!!!'); }
// setTimeout(boo, 5000);



//function foo() { console.log('Ivica!'); }
//setInterval(foo, 5000);






