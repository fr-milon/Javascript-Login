function login(){
    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;

    if (UserName == "admin" && Password == "admin") {
        window.location.href = "welcome.html";
    } else if (UserName == "admin1" && Password =="admin1") {
        window.location.href = "welcome.html";
    } else if (UserName == "admin2" && Password == "admin2") {
        window.location.href = "welcome.html";
    }
    else {
        alert("You have enter incorrect User Name and Password. Please Check Your username & password");
        
    }
}