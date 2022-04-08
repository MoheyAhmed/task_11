// var claim = document.getElementById("claim");
// var val = document.getElementById("validationCustom01");
// var val2 = document.getElementById("validationCustom02");
// var val3 = document.getElementById("validationCustom03");
// var val4 = document.getElementById("validationCustom04");
// claim.addEventListener('click',function(){
//     val.removeAttribute("placeholder");
//     val2.removeAttribute("placeholder");
//     val3.setAttribute("placeholder" , "email@example.com");
//     // val3.style.color = "hsl(0, 100%, 74%)";
//     val4.removeAttribute("placeholder");
// })

// $("#validationCustom03").css({"color":"hsl(0, 100%, 74%)"});

// $("input::placeholder").css({"color" : "hsl(0, 100%, 74%)"});

$(document).ready(function(){
    $("#claim").click(function(){
        $("#validationCustom01").removeAttr("placeholder");
        $("#validationCustom02").removeAttr("placeholder");
        $("#validationCustom03").removeAttr("placeholder");
        $("#validationCustom03").attr("placeholder" ,"email@example.com");
        $("#validationCustom04").removeAttr("placeholder");
    })
 
})