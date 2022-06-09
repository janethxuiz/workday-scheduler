$(document).ready(function() {
    $(".save-btn").on("click", function(){
var value = $(this)
.siblings(".discription")
.val();
var time = $(this)
.parent()
.attr("id");

//setInterval(updateDate, 1000);

localStorage.setItem(time, value);

    });



function updateHour() {
    var currentTime = moment().hours();
    $(".block-time").each(function(){
        var hourBlock = parseInt(
            $(this)
            .attr("id")
            .split("-")[1]
        );
        
        if (hourBlock < currentTime){
            $(this).addClass("past");
        } else if (hourBlock === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

function updateDate() {
    $("#date").text(moment().format("dddd, MMMM Do - h:mm:ss a"));
}


updateHour();

$("#hour-9 .discription").val(localStorage.getItem("hour-9"));
$("#hour-10 .discription").val(localStorage.getItem("hour-10"));
$("#hour-11 .discription").val(localStorage.getItem("hour-11"));
$("#hour-12 .discription").val(localStorage.getItem("hour-12"));
$("#hour-13 .discription").val(localStorage.getItem("hour-13"));
$("#hour-14 .discription").val(localStorage.getItem("hour-14"));
$("#hour-15 .discription").val(localStorage.getItem("hour-15"));
$("#hour-16 .discription").val(localStorage.getItem("hour-16"));
$("#hour-17 .discription").val(localStorage.getItem("hour-17"));


$("#currentDay").text(moment().format("dddd, MMMM Do"));

});