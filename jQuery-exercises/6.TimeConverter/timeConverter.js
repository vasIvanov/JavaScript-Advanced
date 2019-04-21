function attachEventsListeners() {
    $('div').on('click', ':button', convert);

    function convert(e) {
        let inputField = $(e.target).parent().text().trim();
        if(inputField === 'Days:'){
            let daysValue =  $('#days').val();
            $('#hours').val(+daysValue * 24);
            $('#minutes').val(+daysValue * 1440);
            $('#seconds').val(+daysValue * 86400);
        } else if(inputField === 'Hours:') {
            let hoursValue =  $('#hours').val();
            $('#days').val(+hoursValue / 24);
            $('#minutes').val(+hoursValue * 60);
            $('#seconds').val(+hoursValue * 3600);
        } else if(inputField === 'Minutes:') {
            let minutesValue =  $('#minutes').val();
            $('#days').val(+minutesValue / 1440);
            $('#hours').val(+minutesValue / 60);
            $('#seconds').val(+minutesValue * 60);
        } else {
            let secondsValue =  $('#seconds').val();
            $('#days').val(+secondsValue / 86400);
            $('#hours').val(+secondsValue / 3600);
            $('#minutes').val(+secondsValue / 60);
        } 
    }
}
  