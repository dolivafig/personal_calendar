// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$("#container").on("click", function() {
    var textInput = $('.description').val();
    localStorage.setItem('text1', textInput);
    
    })
    // $(function () {})
    
    
    // loop through options to store in array
    // $.each(checkedEl, function(){
    //selected.push($(this).val()); 
    
    
    /* <div id="hour-9" class="row time-block past">
    <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div> */
    
    
    // creates timeblocks row
    var today = dayjs();
    console.log(today)
    var dayWeek = today.format("dddd h:mma");
    var dayHour = today.format("ha");
    console.log(dayHour)
    $("#currentDay").text(dayWeek);
    
    // setColor(today);


    $(".saveBtn").on("click", function(){
        var id = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();
        localStorage.setItem(id, value);
    })

    // $("#container").on("click", "button", function(){

    // })
    // setColor(scheduleHour1);
    $(".time-block").each(function(){
        var time = $(this).children[0].text();
console.log(time)
        if (time< dayHour){
            this.addClass("past")
        } else if(time===dayHour){
            this.addClass("present")
        } else if(time>dayHour){
            this.addClass("future")
        }
    })
    
    // var tablehour = $("#hour-[i]");
    // tablehour.addClass("row time-block");
    // var 
    //   var container = $(".container-fluid px-5");
    //   container.add("<div class="col-2 col-md-1 hour text-center py-3"></div>");
    //   container.add("<textarea class="col-8 col-md-10 description" rows="3"> </textarea>");
    //   container.add("<button class="btn saveBtn col-2 col-md-1" aria-label="save">");
    //   container.add("<i class="fas fa-save" aria-hidden="true"></i>");
    // }
    
    // if(dayHour === hours){
    
    // }
    
    
    
    
    // $(".textarea").contents()
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.