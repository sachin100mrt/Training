function check(){
    document.getElementById("checkTryIt").innerHTML;
    var fruits,i,box="";
    fruits=["Banana","Orange","Apple","Mango"];
    for(i=0; i<fruits.length; i++){
      // console.log(box);
        box ='<input type="checkbox" id="box" value="'+fruits[i]+'"/>';
       //console.log(box);
        document.write(box+fruits[i]+"<br/>");
        //console.log(box);
    } 
    console.log(box+fruits[i]);
}
       
       
       
       
       /*
       <!DOCTYPE html>
        <html>
        <body>
        
        <h2>JavaScript Arrays</h2>
        
        <p>The best way to loop through an array is using a standard for loop:</p>
        
        <p id="demo"></p>
        
        <script>
        var fruits, text, fLen, i,box="";
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        //fLen = fruits.length;
        
        //text = "<ul>";
        for (i = 0; i < fruits.length; i++) {
        box+='<input type="checkbox"; id="box"; value="'+fruits[i]+'"></input>';
        document.write(box+fruits[i]+"<br/>")
        // text += "<li>" + fruits[i] + "</li>";
        }
        //text += "</ul>";
        
        //document.getElementById("demo").innerHTML = box;
        </script>
        










        var checkboxes = document.getElementsByName('employee');
var selected = [];
for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        selected.push(checkboxes[i].value);
    }
}
*/