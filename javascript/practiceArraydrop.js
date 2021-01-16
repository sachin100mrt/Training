<!DOCTYPE html>
<html>
<body>
<form>
  <select id="mySelect">
    <option>Apple</option>
    <option>Orange</option>
    <option>Pineapple</option>
    <option>Banana</option>
  </select>
</form>
<p>Click the button to display the text of all options in the drop-down list.</p>
<button type="button" onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var x = document.getElementById("mySelect");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x[i].text + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>
</body>
</html>

<!DOCTYPE html>
<html>
<body>
<p>Choose an option in the drop-down list and display that option.</p>
<form>
  <select id="mySelect" onchange="myFunction()">
    <option>Apple</option>
    <option>Orange</option>
    <option>Pineapple</option>
    <option>Banana</option>
  </select>
</form>
<p id="demo"></p>
<script>
function myFunction() {
  var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  document.getElementById("demo").innerHTML = x.option[i].text;
}
</script>
</body>
</html>


var x= document.getElementById("dropdownlist");
for(i=0; i<x.options.length;i++){
console.log(x.options[i].value);
//Add operations here
}


var sex=["male","female", "unknown"];
for (i=0;i<sex.length;i++){
var opt = document.createElement("option");
document.getElementById("m").innerHTML=sex[i];
}
The html is:
    <form name = "demo">
    <table id = "demo">
    <th>Demographics</th>
    <tr><td>Sex</td><td><select><option id="m"></option></select></td></tr>
    </table>
    </form>
