
function validate(){
    if (document.myform.Name.value == ""){
        alert("Please Provide Your Name: ");
        document.myform.Name.focus();
        return false;
    }


    var emailID = document.myform.EMail.value;
    if (emailID.trim() === "") {
        alert("Please enter your Email.");
        document.myform.EMail.focus();
        return false;
    }

    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter a valid Email.");
        document.myform.EMail.focus();
        return false;
    }

    if (document.myform.message.value.trim() === "") {
        alert("Please enter your Message.");
        document.myform.message.focus();
        return false;
    }

    return true;
}
