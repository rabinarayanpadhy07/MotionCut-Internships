function addItem() {
    const newItemInput = document.getElementById('newItem');
    const bucketList = document.getElementById('bucketList');

    if (newItemInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="icon">⭐</span> ${newItemInput.value.trim()} <button onclick="removeItem(this)">Remove</button>`;
        bucketList.appendChild(listItem);
        newItemInput.value = '';
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
