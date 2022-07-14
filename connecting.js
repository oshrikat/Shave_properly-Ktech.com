


function ConnectionValidation() {
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if (firstname == null || firstname == "") {
        document.getElementById('error').innerHTML = "השם ריק...";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('firstname').style.borderBottomColor = "darkred";
        return false;
    }

    if ( firstname.length < 3) {
        document.getElementById('error').innerHTML = "שם קצר מידי... ";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('firstname').style.borderBottomColor = "darkred";
        return false;
    }

    if (email == null || email == "") {
        document.getElementById('error').innerHTML = "האימייל ריק.. אנא הכנס אימייל";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }

    if (email.length <= 2) {
        document.getElementById('error').innerHTML = "האימייל קצר מידי..";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }

    var etPosition = email.indexOf('@');

    if (etPosition == 0) {
        document.getElementById("error").innerHTML = "הסימן @ לא יכול להיות בהתחלה";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }

    var etAmount = etcounter(email);

    if (etAmount != 1) {
        document.getElementById("error").innerHTML = "  צריך להיות @ אחד! לך יש: " + etAmount;
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }

    var dotPosition = email.indexOf('.');

    if (dotPosition == 0) {
        document.getElementById("error").innerHTML = "נקודה לא יכולה להיות האות הראשונה   ";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }


    var dotAmout = dotCounter(email);

    if (dotAmout == 0) {
        document.getElementById("error").innerHTML = "חייבת להיות לפחות נקודה אחת... / לך יש:    " + dotAmout;
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }

    if (email.charAt(etPosition - 1) == '.' || email.charAt(etPosition + 1) == '.') {
        document.getElementById("error").innerHTML = "הנקודה לא יכולה להיות במרחק של אחד מהאימייל";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('email').style.borderBottomColor = "darkred";
        return false;
    }


    if (pass == null || pass == "") {
        document.getElementById("error").innerHTML = "סיסמה ריקה, אנא מלא סיסמה";
        document.getElementById('error').style.color = "darkred";
        document.getElementById('pass').style.borderBottomColor = "darkred";
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
        document.getElementById("error").innerHTML = "";
        document.getElementById("firstname").style.borderBottomColor = "black";
        document.getElementById("firstname").value == ''; // לא עובד...
    }
 

    else if (id == "email") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("email").style.borderBottomColor = "black";
    }

    else if (id == "pass") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("pass").style.borderBottomColor = "black";
    }


}
