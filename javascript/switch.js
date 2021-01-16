function fruit(){
var health=document.getElementById("labelClick").value;
var name ;
switch(health){
case  "Banana":
    name="Banana is good";
    console.log(name);
    break;
case "Orange":
    name="Orange is juicy";
    console.log(name);
    break;
case "Apple":
    name="Apple is sweet";
    console.log(name);
    break;
case "Gauava":
    name="Gauava is hard";
    console.log(name);
    break;
default:
name="This fruit is not in the basket";
console.log(name);
}
document.getElementById("ParaClick").innerHtml=name;

}
