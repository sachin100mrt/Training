function registration() {
    //document.getElementById("firstname").innerHTML 
  var click = document.getElementById("firstname").value
  //alert(click);
  display.innerHTML=click;
  }
  
  
  /*function registration() {
      document.getElementById("totalIds").innerHTML;
      var i,candidate,box="";
      candidate=["firstname","lastname","dob","mail","phone","radio1","radio2","radio3",
      "address","city","pin","state","country","checkbox1","checkbox2","checkbox3","checkbox4","checkbox5"];
      for(i=0;i<candidate.length;i++){
      box +='<input value="'+canditate[i]+'"/>';
      }
     var click=document.getElementById("totalIds").innerHTML=Box;    
    //var click = document.getElementById("firstname").value
    //alert(click);
    display.innerHTML=click;
    }
    
  "firstname","lastname","dob","mail","phone,"radio1","radio2","radio3","address","city","pin","state","country","checkbox1",checkbox2,checkbox3,checkbox4,checkbox5
  
  function text(){
      document.getElementById("textTryIt").innerHTML;
      var fruits,i,box="";
      fruits=["Banana","Orange","Apple","Mango"];
      for(i=0; i<fruits.length; i++){
      box +='<input type="textbox" id="box" value="'+fruits[i]+'"/>';
      console.log(box);
      } 
       document.getElementById("TryIt").innerHTML=box;
       console.log(box);
  }
  
  <head>
      <script src="./../javascript/practiceArraytextBox.js"></script>
      <title>textbox Javascript</title>
  </head>
  
  <body>
      <p id="TryIt"></p>
      <input id="textTryIt"></input>
      <button id="btnSave" type="button" onclick="text()"> Try it</button>
  </body>
  
  </html>*/
  
<p id='fisrt'>??????</p>
<p id='second'>??????</p>
<p id='third'>??????</p>
<p id='forth'>??????</p>
<p id='fifth'>??????</p>
<button id="change" onclick="changeColor()">color red</button>
<script>

    var ids = ['fisrt','second','third','forth','fifth'];

    function changeColor() {
        for (var i = 0; i < ids.length; i++) {
          document.getElementById(ids[i]).style.color='red';
 }
    }
</script>
