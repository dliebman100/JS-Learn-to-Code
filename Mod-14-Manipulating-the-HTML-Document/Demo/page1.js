"use strict";

window.onload = function() {
    //since we have a submit button we handle the FORM'S SUBMIT
    //event rather than the button's click event
    const submit = document.getElementById("submit");
    submit.onclick = submitBtnClicked;

}
function submitBtnClicked() {
    //write some if statements to check the validity of the data
    //...
    //...
    //if all is good
        return true;
    //if there is invalid data and you don't want to submit to the server 
    // alert ("YES");
    // want to submit to the server -- but instead want to
    // let the user make corrections
        return false;
}
