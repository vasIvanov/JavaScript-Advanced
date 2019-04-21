function search() {

   let input = $('#searchText').val();

   $('li').css('font-weight', '');
   $(`li:contains("${input}")`).css('font-weight', 'bold');
   let count = $(`li:contains("${input}")`).toArray().length;
   $('#result').text(`${count} matches found`)
}