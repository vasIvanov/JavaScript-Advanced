function attachGradientEvents() {
    let $box = $('#gradient');
    $box.on('mousemove', (e) => {
        
        let power = e.offsetX / ($(e.target).innerWidth() - 1);
        power = Math.trunc(power * 100) ;
        
        $('#result').text(`${power}%`);
        
    });
    $box.on('mouseout', () => {
        $('#result').text(``);
    });
}