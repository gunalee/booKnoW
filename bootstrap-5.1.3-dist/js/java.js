function validate() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (userName == "admin" && password == "password") {
        alert("sucessfully Loged in ");

    } else {
        alert("Error");
    }

}