function increment(selector) {
    let container = $(selector);
    let textarea = $('<textarea class="counter" disabled="disabled"></textarea>');
    textarea.text(0);
    container.append(textarea);
    let incrementButton = $('<button class="btn" id="incrementBtn">Increment</button>');
    container.append(incrementButton);
    let addButton = $('<button class="btn" id="addBtn">Add</button>');
    container.append(addButton);
    let ul = $('<ul class="results"></ul>');
    container.append(ul);

    incrementButton.on('click', () => {
        let currValue = textarea.text();
        textarea.text(+currValue + 1);
    });

    addButton.on('click', () => {
        let currValue = textarea.text();
        let li = $('<li>');
        li.text(currValue)
        ul.append(li);
    })
}
