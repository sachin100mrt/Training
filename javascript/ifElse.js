function good() {
    var enter = document.getElementById("inputTryIt").value;
    var result;
    if (enter == "a") {
        result = "I am Sachin";
        console.log(result);
    }
    else if (enter == "b") {
        result = "I am Good";
        console.log(result);
    }
    else if (enter == "c") {
        result = "I am Reading";
        console.log(result);
    }
    else if (enter == "d") {
        result = "I am Writing"
        console.log(result);
    }
    else {
        result = "I am Busy";
        console.log(result);
    }
    document.getElementById("TryIt").innerHtml = result;
}
