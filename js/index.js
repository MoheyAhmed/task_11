var claim = document.getElementById("claim");
var val = document.getElementById("validationCustom01");
var val2 = document.getElementById("validationCustom02");
var val3 = document.getElementById("validationCustom03");
var val4 = document.getElementById("validationCustom04");
claim.addEventListener('click',function(){
    val.removeAttribute("placeholder");
    val2.removeAttribute("placeholder");
    val3.setAttribute("placeholder" , "email@example.com");
    val4.removeAttribute("placeholder");
})