function addItem() {
    let $option = $('<option>');
    
    let text = $('#newItemText').val();
    let value = $('#newItemValue').val();
    $('#newItemText').val('');
    $('#newItemValue').val('');
    $option.val(value);
    $option.text(text);
    $('#menu').append($option);
    
}
