<!DOCTYPE html>
<html>
<head>
<script>
function check(browser) {
  document.getElementById("answer").value=browser;
}
</script>
</head>
<body>

<p>What's your favorite browser?</p>

<form>
<input type="radio" name="browser" onclick="check(this.value)" value="Internet Explorer">Internet Explorer<br>
<input type="radio" name="browser" onclick="check(this.value)" value="Firefox">Firefox<br>
<input type="radio" name="browser" onclick="check(this.value)" value="Opera">Opera<br>
<input type="radio" name="browser" onclick="check(this.value)" value="Google Chrome">Google Chrome<br>
<input type="radio" name="browser" onclick="check(this.value)" value="Safari">Safari<br>
<br>
Your favorite browser is: <input type="text" id="answer" size="20">
</form>

</body>
</html>






<!DOCTYPE html> 
<html> 
  
<head> 
    <title> 
        Get value of selected 
        radio button 
    </title> 
</head> 
  
<body> 
    <p> 
        Select a radio button and click on Submit. 
    </p> 
      
    Gender: 
    <input type="radio" name="gender" value="Male">Male 
    <input type="radio" name="gender" value="Female">Female 
    <input type="radio" name="gender" value="Others">Others 
      
    <br> 
      
    <button type="button" onclick="displayRadioValue()"> 
        Submit 
    </button> 
      
    <br> 
      
    <div id="result"></div> 
      
    <script> 
        function displayRadioValue() { 
            var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result").innerHTML
                        = "Gender: "+ele[i].value; 
            } 
        } 
    </script> 
</body> 
</html>                     
Output :















