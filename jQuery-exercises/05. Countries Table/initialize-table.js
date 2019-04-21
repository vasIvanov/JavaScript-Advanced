function initializeTable() {
    fixRow();
    $('#createLink').click(createButton);
    

   

    function createButton () {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        if(country !== '' && capital !== '') {
            addCountryAndCapital(country, capital);
            fixRow()
        }
    }
    function addCountryAndCapital (country, capital){
        let row = $(`<tr><td>${country}</td><td>${capital}</td></tr>`);

        let actions = $('<td>')
            .append($('<a href="#">[Up]</a>').click(moveUp))
            .append($('<a href="#">[Down]</a>').click(moveDown))
            .append($('<a href="#">[Delete]</a></td>').click(deleteRow));
        row.append(actions);    
        $('#countriesTable').append(row);
    }

    function moveUp () {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixRow()
        
    }

    function moveDown () {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixRow()
    }

    function deleteRow () {
        let currentRow = $(this).parent().parent();
        currentRow.remove();
        fixRow()
    }

    function fixRow() {
        $('#countriesTable a').css('display', 'inline');
        $('#countriesTable tr:nth-child(3) a:first-child').css('display', 'none');
        $('#countriesTable tr:last-child a:nth-child(2)').css('display', 'none');
        
        
    }
        
              
    

    addCountryAndCapital('Bulgaria', 'Sofia');
    addCountryAndCapital('Germany', 'Berlin');
    addCountryAndCapital('Russia', 'Moscow');
    fixRow()
}