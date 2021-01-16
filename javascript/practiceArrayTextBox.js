        function text(){
        document.getElementById("btnSave").innerHTML;
        var fruits,i,box="";
        fruits=["Banana","Orange","Apple","Mango"];
        for(i=0; i<fruits.length; i++){
        box +='<input value="'+fruits[i]+'"/>';
        console.log(box);
        } 
         document.getElementById("TryIt").innerHTML=box;
         console.log(box);
    }
      