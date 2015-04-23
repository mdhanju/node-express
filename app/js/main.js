$(function () {
    $('#search').on('keyup', function (e) {
        if (e.keyCode === 13) {
            var parameters = {
                search: $(this).val()
            };
            $.get('/searching', parameters, function (data) {
                console.log("  1 *************************** ");
                console.log(data);
                console.log("  2 *************************** ");
                console.log(data.length);

                //                $('#results').html(data.city);
                //                $('#weather').html(data.weather[0].description);
            });
        }
    });



});