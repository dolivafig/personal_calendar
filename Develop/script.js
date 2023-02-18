var today = dayjs();
console.log(today)
var dayWeek = today.format("dddd h:mma");
var dayHour = today.format("H");
$("#currentDay").text(dayWeek);

$(".saveBtn").on("click", function(){
    var id = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(id, value);
})

$(".time-block").each(function(){
    var time = $(this).attr("id").split("-")[1];
    console.log(time)
    console.log(dayHour)
    
    if (time < dayHour){
        $(this).addClass("past")
    } else if(time === dayHour){
        $(this).addClass("present")
    } else if(time > dayHour){
        $(this).addClass("future")
    }
})