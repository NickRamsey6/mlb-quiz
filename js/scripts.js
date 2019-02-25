var team = "Cardinals";

// console.log(team);

$(document).ready(function() {
  $('form#mlbQuiz').submit(function(event) {
    var age = parseInt($('input#age').val());
    var care = $("select#care").val();
    var pride = $("select#pride").val();
    var pc = $("select#pc").val();
    var fight = $("input:radio[name=fight]:checked").val();

    if(age>=50) {
       $('#Cubs').show();
    }
    else if (care ==='no') {
       $('#Mariners').show();
    }
    else if (pride ==='yes') {
     $('#Yankees').show();
    }
    else if (pc ==='hate') {
      $('#Indians').show();
    }
    else if (fight ==='during') {
      $('#Dodgers').show();
    }
    else {
      $('#Rays').show();
    }

    // $('#result').append(team);
    // $('#resultbox').show();
    event.preventDefault();

  })
})
