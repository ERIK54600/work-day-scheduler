$( document ).ready(function() {
    console.log( "ready!" );
    var currentDay  = moment();
    let $headerDate = $("#currentDay");
    $headerDate.text(currentDay.format('MMMM Do YYYY'));
    let nowHour24 = moment().format('H');


    let $plannerDiv = $('#plannerContainer');


 
    for (let hour = 9; hour <= 17; hour++) {

        let $rowDiv = $('<tr>');
        $rowDiv.addClass('d-flex');
        // $rowDiv.attr('hour-index',hour);
        let $hourfield = $('<td>');
        $hourfield.addClass('col-md-2');
        $hourfield.text(hour);
        
        let $inputfield = $('<td>');
        $inputfield.addClass('col-md-8');
        let $inputtag = $('<input/>');

        let $savefield = $('<td>');
        $savefield.addClass('col-md-2');
        let $savebutton = $('<button>save</button>');
        


        $savefield.append($savebutton);
        $inputfield.append($inputtag);
        $rowDiv.append($hourfield);
        $rowDiv.append($inputfield);
        $rowDiv.append($savefield);

        updateRowColor($rowDiv, hour);

        $plannerDiv.append($rowDiv);

    };


    function updateRowColor ($hourRow,hour) { 

    
    
        if ( hour < nowHour24) {
          // $hourRow.css('')
          $hourRow.css("background-color","lightgrey")
        } 
        else if ( hour > nowHour24) {
          $hourRow.css("background-color","lightgreen")
        } 
        else {
          $hourRow.css("background-color","tomato")
        }
      };

});
