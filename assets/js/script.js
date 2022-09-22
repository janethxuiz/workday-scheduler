// getting todays date
var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);

// save button
$(document).ready(function () {
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

    })

    // updating hour 
    function timeTrack() {
        var currentTime = moment().hours();

        $(".block-time").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#hour9 .discription").val(localStorage.getItem("hour9"));
    $("#hour10 .discription").val(localStorage.getItem("hour10"));
    $("#hour11 .discription").val(localStorage.getItem("hour11"));
    $("#hour12 .discription").val(localStorage.getItem("hour12"));
    $("#hour13 .discription").val(localStorage.getItem("hour13"));
    $("#hour14 .discription").val(localStorage.getItem("hour14"));
    $("#hour15 .discription").val(localStorage.getItem("hour15"));
    $("#hour16 .discription").val(localStorage.getItem("hour16"));
    $("#hour17 .discription").val(localStorage.getItem("hour17"));

    timeTrack();
})