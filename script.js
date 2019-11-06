console.log("funguje mi to")

var x="text";
var y=200;
var z=5;
var doubleY= y*2;4
var pokus=[1,2,3,4,5,6,7,8,9,10]
id="demo"
var  mena= {firstName:"John", lastName:" Shelby", funkcia:"bookmaker"};
document.getElementById("demo").innerHTML =mena.firstName +" "+ mena.lastName
id="ups"
var brother, text, bLen, i;
brother = ["John", "Arthur", "Tommy"];
bLen = brother.length;

text = "<ul>";
for (i = 0; i < bLen; i++) {
  text += "<li>" + brother[i] + "</li>";
}
text += "</ul>";
document.getElementById("usp").innerHTML = text;

id="push"
brother.push("Michael")
document.getElementById("push").innerHTML =brother;

id="join"
document.getElementById("join").innerHTML =brother.join(" &#8364 ");

id="for each"

var txt = "";
var numbers = [45, 4, 9];
numbers.forEach(myFunction2);
function myFunction2(value, index, array) {
  txt = txt + value + "<br>";
}
document.getElementById("for each").innerHTML =txt;
id="mocnina"
document.getElementById("mocnina").innerHTML =Math.pow(y,2);

id="araymap"

var numbers2 = pokus.map(araymap);
function araymap(value, index, array) {
  return value * 2;

  
}
document.getElementById("araymap").innerHTML =numbers2;

id="find"
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("find").innerHTML = ages.find(checkAdult);
}