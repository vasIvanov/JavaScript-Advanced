function solution() {
	const $toyType = $('#toyType');
	const $toyPrice = $('#toyPrice');
	const $toyDescription = $('#toyDescription');
	const $section = $('#christmasGiftShop');
	$('button').on('click', () => {
		let toyType = $toyType.val();
		let toyPrice = $toyPrice.val();
		let toyDescription = $toyDescription.val();

		let typeIsValid = toyType !== '';
		let priceIsValid = +toyPrice;
		let descriptionIsValid = toyDescription !== '' && toyDescription.length > 49;

		

		if(typeIsValid && priceIsValid && descriptionIsValid) {
			let $div = $('<div>');
			$div.addClass('gift');

			let $img = $('<img>');
			$img.attr('src', 'gift.png');

			let $h2 = $('<h2>');
			$h2.text(toyType);


			let $p = $('<p>')
			$p.text(toyDescription);

			let $button = $('<button>');
			$button.addClass('buy-button');
			$button.text(`Buy it for $${toyPrice}`);

		

			$div.append($img);
			$div.append($h2);
			$div.append($p);
			$div.append($button);
			$section.append($div);
			$('.gift').on('click', 'button', (e) => {
				$(e.target).parent().remove();
				
			})
		}
		$toyType.val('');
		$toyPrice.val('');
		$toyDescription.val('');
	});
}