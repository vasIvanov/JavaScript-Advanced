function attachEvents() {
    $('a').on('click', function () {
        $('.selected').removeClass('selected');
        
       
        $(this).addClass('selected');
    });

}