function authentication(login, pwd) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && xhttp.status == 200) {
            checkLoginPwd(this, login, pwd);
        }
    }
    xhttp.open("GET", "data/userbase.xml", true);
    xhttp.send();

}

function checkLoginPwd(xhttp, login, pwd) {
    var xml = xhttp.responseXML;
    var user = xml.getElementsByTagName("USER");
    var i, loginExist = false;
    for (i = 0; i < user.length; i++) {
        if (login == user[i].getElementsByTagName("LOGIN")[0].childNodes[0].nodeValue) {
            loginExist = true;
            if (pwd == user[i].getElementsByTagName("PWD")[0].childNodes[0].nodeValue) {
                document.location.href = login.toLowerCase()+'.html';
                break;
            } else {
                document.getElementById("errorMessage").innerText="Invalid login or password";
            }
        } else {
            if (i == user.length - 1 && loginExist != true) {
                document.getElementById("errorMessage").innerText="Invalid login or password";
            }
        }
        ;
    }
};

function usersRegistration(newLogin, newPwd, checkNewPwd, userFirstName, userLastName, userBirthday) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && xhttp.status == 200) {
            createNewUser(this, newLogin, newPwd, checkNewPwd, userFirstName, userLastName, userBirthday);
        }
    }
    xhttp.open("GET", "data/userbase.xml", true);
    xhttp.send();

}


function createNewUser(xhttp, newLogin, newPwd, checkNewPwd, userFirstName, userLastName, userBirthday) {


}