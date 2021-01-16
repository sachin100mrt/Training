function dropdownTryIt1(){
    var box= document.getElementById("drop1");
 var  i;
 var frt="";
 //fruits=["Banana","Orange","Apple","Mango"];
 //box.innerHTML="";

 for(i=0;i<box.length;i++){
 frt=box[i].text;
 console.log(frt);
 //box.innerHTML+="frt";
 }
 document.getElementById("tryIt1").innerHTML=frt;
console.log(frt);
 }