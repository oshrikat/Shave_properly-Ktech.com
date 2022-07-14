
function clear() {

    var id = event.target.id;

    if (id == "myname") {
        document.getElementById("error").innerHTML = null;
        document.getElementById("myname").style.border = '1px solid black';

    }

}

function check(){

    var name = document.getElementById("myname").value;

    if (name == null || name == "") {
        document.getElementById("myname").style.border = '1px solid red';
        document.getElementById("error").style.padding="5%";
        document.getElementById("error").innerHTML = "This is no right!! Please fill it good!";
        return false;
    }
    else if (name.length <= 2) {
        document.getElementById("myname").style.border = '1px solid red';
        document.getElementById("error").style.padding = "5%";
        document.getElementById("error").innerHTML =  "You need more than 2 characters";
        return false;
    }
    return true;
}