function radio(){
    document.getElementById("RadioTryIt").innerHTML;
    var i,fruits,box="";
    fruits=["Banana","Orange","Apple","Mango"];
    for(i=0;i<fruits.length;i++){
        //console.log();
        box='<input type="radio" value="fruits[i]"/>'
      //  console.log(box);
        document.write(box+fruits[i]+"</br>")
        console.log(fruits[i]);
    }
    //console.log(box);
}