$(document).ready(function () {

    $("#fizzbuzz").submit(function (event) {
        var start = parseInt($("#start").val());
        var finish = parseInt($("#finish").val());

        if (!isNaN(start) && !isNaN(finish)) {
            var i;
            for (i = start; i <= finish; i++) {

                if (i % 3 === 0 && i % 5 === 0) {
                    $("#output").append("<span class='fizzbuzz'>FizzBuzz</span>");
                } else if (i % 3 === 0) {
                    $("#output").append("<span class='fizz'>Fizz</span>");
                } else if (i % 5 === 0) {
                    $("#output").append("<span class='buzz'>Buzz</span>");
                } else {
                    $("#output").append("<span>" + i + "</span>");
                }
            }
            $("#output span").fadeIn(100);
        } else {

            $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
        }

        return false;
    });

    $('input').on('focus', function () {
        $("#output span").fadeOut(100, function () {
            $("#output").empty();
        });
        $("#error").empty();
    });
   
});
