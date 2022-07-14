

function check2() {

    var email = document.getElementById("email").value;

    if (email == null || email == "" || email.length < 2) {

        alert("לא טוב😥 אין לך אימייל??");
        return false;
    }

    var etPosition = email.indexOf('@');

    var dotPosition = email.indexOf('.');

    var dotAmout = dotCounter(email);


    if (email.charAt(etPosition - 1) == '.' || email.charAt(etPosition + 1) == '.') {
        document.getElementById("errorhome").innerHTML = "הנקודה לא יכולה להיות במרחק של אחד מהאימייל";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    var End_dot = email.lastIndexOf('.');
    if (email.length - 2 <= End_dot) {
        document.getElementById('errorhome').innerHTML = "הנקודה האחרונה חייבת מרחק של שתי אותיות לפני הסוף";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    return true;
}


function validation() {

    var userName = document.getElementById("firstname").value;
    var userLastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;


    if (userName == null || userName == "") {
        document.getElementById("errorhome").innerHTML = "הכנס בבקשה שם פרטי.";
        document.getElementById("firstname").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    else if (userName.length < 2) {
        document.getElementById("errorhome").innerHTML = "השם חייב להיות שתי אותיות ומעלה..";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


    if (userLastName == null || userLastName == "") {
        document.getElementById("errorhome").innerHTML = "הכנס בבקשה שם משפחה.";
        document.getElementById("lastname").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    else if (userLastName.length <= 2) {
        document.getElementById("errorhome").innerHTML = 'שם משפחה חייב להיות שתי אותיות ומעלה..';
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    else {
        document.getElementById('lastname').style.borderBottom = "1px solid black";
        document.getElementById('errorhome').innerHTML = " ";
    }


    if (email == null || email == "") {
        document.getElementById("errorhome").innerHTML = "הכנס בבקשה אימייל.";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    else if (email.length <= 2) {
        document.getElementById("errorhome").innerHTML = " אימייל חייב להיות יותר משתי אותיות ";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


    var etPosition = email.indexOf('@');

    if (etPosition == 0) {
        document.getElementById("errorhome").innerHTML = "הסימן @ לא יכול להיות בהתחלה";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }

    var etAmount = etcounter(email);

    if (etAmount != 1) {
        document.getElementById("errorhome").innerHTML = "  צריך להיות @ אחד! לך יש: " + etAmount;
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }
    var dotPosition = email.indexOf('.');

    if (dotPosition == 0) {
        document.getElementById("errorhome").innerHTML = "נקודה לא יכולה להיות האות הראשונה   ";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


    var dotAmout = dotCounter(email);

    if (dotAmout == 0) {
        document.getElementById("errorhome").innerHTML = "חייבת להיות לפחות נקודה אחת... / לך יש:    " + dotAmout;
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


    if (email.charAt(etPosition - 1) == '.' || email.charAt(etPosition + 1) == '.') {
        document.getElementById("errorhome").innerHTML = "הנקודה לא יכולה להיות במרחק של אחד מהאימייל";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("errorhome").style.color = "red";
        document.getElementById("errorhome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


    if (pass == null || pass == "") {
        document.getElementById('errorhomehome').innerHTML = "הכנס בבקשה סיסמה";
        document.getElementById("pass").style.borderBottomColor = "darkred";
        document.getElementById("errorhomehome").style.color = "red";
        document.getElementById("errorhomehome").style.fontWeight = "900";
        document.getElementById("errorhome").style.backgroundColor = "white";
        return false;
    }


   


    return true;


}

function etcounter(email) {

    var counter = 0;
    for (var i = 0; i < email.length; i++) {
        if (email.charAt(i) == '@') {
            counter++;
        }

    }
    return counter;
}

function dotCounter(email) {
    var DotCounter = 0;
    for (var i = 0; i < email.length; i++) {

        if (email.charAt(i) == '.') {
            DotCounter++;
        }
    }
    return DotCounter;
}










function clearAll() {

    var id = event.target.id;
    if (id == "firstname") {
        document.getElementById("errorhome").innerHTML = "";
        document.getElementById("firstname").style.borderBottomColor = "black";
       
    }
    else if (id == "lastname") {
        document.getElementById("errorhome").innerHTML = "";
        document.getElementById("lastname").style.borderBottomColor = "black";
    }

    else if (id == "email") {
        document.getElementById("errorhome").innerHTML = "";
        document.getElementById("email").style.borderBottomColor = "black";
    }

    else if (id == "pass") {
        document.getElementById("errorhome").innerHTML = "";
        document.getElementById("pass").style.borderBottomColor = "black";
    }


}
