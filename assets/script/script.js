// Function that will generate the password by first setting values for the variables, look for random characters in a string and adding them to random numbers

function genPwd() {
    var pwdSize = 10;
    var pwdKey = "";
    var char = "0123456789qwertpoiuyasdfg;lkjhzxcvb.,mnb/?!@#$%^&*()_+=-`~{}:;[]";

    for (var i=0; i<pwdSize; i++) {
        var randomPassword = Math.floor(Math.random() * char.length);
        pwdKey += char.substring(randomPassword,randomPassword+1);
    }
   //document.getElementById("pwd").value = pwd;
}

genPwd()