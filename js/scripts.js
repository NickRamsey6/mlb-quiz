var team = "Dodgers";

// console.log(team);

$(document).ready(function() {
  $('form#mlbQuiz').submit(function(event) {
    var care = $("select#care").val();
    var pride = $("select#pride").val();
    var pc = $("select#pc").val();


    if (care ==='no') {
       var team = "Mariners";
    }
    else if (pride ==='yes') {
      var team = "Yankees";
    }
    else if (pc === 'hate') {
      var team = "Indians";
    }

    $('#result').append(team);
    $('#resultbox').show();
    event.preventDefault();

  })
})
