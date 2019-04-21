function dart(){
	let colorPointsArray = $('#scoreboard table tbody tr td');
	let colorPoint = [];
	let homePointsEl = $('#Home p').eq(0);
	let awayPointsEl = $('#Away p').eq(0);
	let isHome = true;

	for (let i = 1; i < colorPointsArray.length; i = i + 2) {
		let points = $(colorPointsArray[i]).text().split(' ')[0];
		colorPoint.push(+points);
	}
	let layersName = [];
	let layersEl = $('#playBoard div').toArray();
	layersEl.map(l => {
		layersName.push($(l).attr('id'));
		
	});
	
	$('#playBoard div').on('click', (e) => {
		e.stopPropagation();
		let clickedLayerName = $(e.target).attr('id')
		let index = layersName.indexOf(clickedLayerName);
		
		let points = colorPoint[index];
		if(isHome) {
			let homePoints = $('#Home p').eq(0).text();
			$('#Home p').eq(0).text(Number(+homePoints + points));
			if(+$('#Home p').eq(0).text() > 99) {
				$('#Home p:last-child').css('background', 'green');
				$('#Away p:last-child').css('background', 'red');
				$('#playBoard div').off('click');
				
			}
			$('#turns p:first-child').text('Turn on Away');
			$('#turns p:last-child').text('Next is Home');
			isHome = false;
		} else {
			let awayPoints = awayPointsEl.text();
			awayPointsEl.text(Number(+awayPoints + points));
			if(+awayPointsEl.text() > 99) {
				$('#Away p:last-child').css('background', 'green');
				$('#Home p:last-child').css('background', 'red');
				$('#playBoard div').off('click');
				
			}
			$('#turns p:first-child').text('Turn on Home');
			$('#turns p:last-child').text('Next is Away');
			isHome = true;
		}


	})
	
}