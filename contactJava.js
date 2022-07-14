

function check2() {

    var email = document.getElementById("email").value;

    if (email == null || email == "" || email.length < 2) {

        alert("לא טוב😥 אין לך אימייל??");
        return false;
    }

    var etPosition = email.indexOf('@');

    var dotPosition = email.indexOf('.');

    var dotAmout = dotCounter(email);


    if (email.charAt(etPosition - 1) == '.' || email.charAt(etPosition + 1) == '.' ){
        document.getElementById("error").innerHTML = "הנקודה לא יכולה להיות במרחק של אחד מהאימייל";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    var End_dot = email.lastIndexOf('.');
    if (email.length - 2 <= End_dot) {
        document.getElementById('error').innerHTML = "הנקודה האחרונה חייבת מרחק של שתי אותיות לפני הסוף";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    return true;
}


function validation() {

    var userName = document.getElementById("firstname").value;
    var userLastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;


    if (userName == null || userName == "") {
        document.getElementById("error").innerHTML = "הכנס בבקשה שם פרטי.";
        document.getElementById("firstname").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }
    
    else if (userName.length < 2) {
        document.getElementById("error").innerHTML = "השם חייב להיות שתי אותיות ומעלה..";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }
   

    if (userLastName == null || userLastName == "") {
        document.getElementById("error").innerHTML = "הכנס בבקשה שם משפחה.";
        document.getElementById("lastname").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    else if (userLastName.length <= 2) {
        document.getElementById("error").innerHTML = 'שם משפחה חייב להיות שתי אותיות ומעלה..';
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    else {
        document.getElementById('lastname').style.borderBottom = "1px solid black";
        document.getElementById('error').innerHTML = " ";
    }


    if (email == null || email == "") {
        document.getElementById("error").innerHTML = "הכנס בבקשה אימייל.";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    else if (email.length <= 2) {
        document.getElementById("error").innerHTML = " אימייל חייב להיות יותר משתי אותיות ";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    
    var etPosition = email.indexOf('@');

    if (etPosition == 0) {
        document.getElementById("error").innerHTML = "הסימן @ לא יכול להיות בהתחלה";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

    var etAmount = etcounter(email);

    if (etAmount != 1) {
        document.getElementById("error").innerHTML = "  צריך להיות @ אחד! לך יש: " + etAmount;
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }
    var dotPosition = email.indexOf('.');

    if (dotPosition == 0) {
        document.getElementById("error").innerHTML = "נקודה לא יכולה להיות האות הראשונה   ";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }


    var dotAmout = dotCounter(email);

    if (dotAmout == 0) {
        document.getElementById("error").innerHTML = "חייבת להיות לפחות נקודה אחת... / לך יש:    " + dotAmout;
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }


    if (email.charAt(etPosition - 1) == '.' || email.charAt(etPosition + 1) == '.') {
        document.getElementById("error").innerHTML = "הנקודה לא יכולה להיות במרחק של אחד מהאימייל";
        document.getElementById("email").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }


    if (number == null || number == "") {
        document.getElementById('error').innerHTML = "הכנס בבקשה מס' טלפון";
        document.getElementById("number").style.borderBottomColor = "darkred";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontWeight = "900";
        document.getElementById("error").style.backgroundColor = "white";
        return false;
    }

  
     if (number.length != 10) {
         document.getElementById('error').innerHTML = " חייב להיות 10 ספרות .  ";
         document.getElementById("email").style.borderBottomColor = "darkred";
         document.getElementById("error").style.color = "red";
         document.getElementById("error").style.fontWeight = "900";
         document.getElementById("error").style.backgroundColor = "white";
        return false;
    }
   

    return true;


}

function etcounter(email){

    var counter = 0;
    for (var i = 0; i < email.length; i++)
    {
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
    }
    else if (id == "lastname") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("lastname").style.borderBottomColor = "black";
    }

    else if (id == "email") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("email").style.borderBottomColor = "black";
    }

    else if (id == "number") {
        document.getElementById("error").innerHTML = "";
        document.getElementById("number").style.borderBottomColor = "black";
    }
   
    
}
