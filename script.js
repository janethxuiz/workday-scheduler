$(document).ready(function() {
    $(".save-btn").on("click", function(){
var value = $(this)
.siblings(".discription")
.val();
var time = $(this)
.parent()
.attr("id");

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

updateHour();

$("#hour-9 .discription").val(localStorage.getItem("hour-9"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));

});