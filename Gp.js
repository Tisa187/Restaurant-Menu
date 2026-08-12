const  menu = document.getElementById("Menu");
const Option = document.getElementById("option");

function submitValues(event) {
    event.preventDefault();
    document.getElementById("displayDiv").style.display="block" ;
    Output.innerHTML =
    "<br> menu :" +
    menu.value +
    "<br>I want food :" +
    Option.value ;
}
