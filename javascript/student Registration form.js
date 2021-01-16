function registration(form,name) {
    //document.getElementById("firstname").innerHTML 
    

    var click1 = document.getElementById("firstname").value
    var click2 = document.getElementById("lastname").value
    var click3 = document.getElementById("dob").value
    var click4 = document.getElementById("mail").value
    var click5 = document.getElementById("phone").value
            var ele = document.getElementsByName('gender'); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
    var click7=document.getElementById("display").innerHTML+ele[i].value; 
            } 
         
    
    var click10 = document.getElementById("address").value
    var click11 = document.getElementById("city").value
    var click12 = document.getElementById("pin").value
    var click13 = document.getElementById("state").value
    var click14 = document.getElementById("country").value
    
    var click16 = document.getElementById("checkbox1").value
    var click17 = document.getElementById("checkbox2").value
    var click18 = document.getElementById("checkbox3").value
    var click19 = document.getElementById("checkbox4").value
    var click20 = document.getElementById("checkbox5").value
    document.getElementById("input").innerHTML = click1 + click2 + click3 + click4 + 
    click5 +click7+ click10 + click11 + click12 + click13 + click14+click16+click17+click18+click19+click20;
}

