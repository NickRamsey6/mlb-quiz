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
      var team ="Cubs";
    }
    else if (care ==='no') {
       var team = "Mariners";
    }
    else if (pride ==='yes') {
      var team = "Yankees";
    }
    else if (pc ==='hate') {
      var team = "Indians";
    }
    else if (fight ==='during') {
      var team = "Dodgers";
    }
    else {
      var team = "Rays"
    }

    $('#result').append(team);
    $('#resultbox').show();
    event.preventDefault();

  })
})
