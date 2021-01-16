function dropdownTryIt(){
  // var ox= document.getElementById("drop");
var fruits,i,box="";
fruits=["Banana","Orange","Apple","Mango"];
//box.innerHTML="";
for(i=0;i<fruits.length;i++){
    box='<select id="drop" value="+fruits[i]+"></select>'; 
console.log(box);
//box.innerHTML="ox";
}
//document.getElementById("tryIt").innerHTML=box;
console.log(box);
}