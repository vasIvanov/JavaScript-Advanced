function extractText() {
   let result = $('#items li').toArray().map((el) => el.textContent).join(', ');
   $('#result').text(result);
}
