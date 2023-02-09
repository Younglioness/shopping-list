/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
    const text = input.value;
    if (event.key == 'Enter') {
        const newItem = document.createElement('div');
        newItem.textContent = text;
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })
        if (text != '') {
            itemsContainer.append(newItem);
        }
        input.value = '';
    }
});