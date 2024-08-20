document.getElementById('addItem').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const imageInput = document.getElementById('imageInput');
    const itemText = itemInput.value.trim();
    const imageUrl = imageInput.value.trim();

    if (itemText !== "") {
        const itemGrid = document.getElementById('itemGrid');

        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';

        const img = document.createElement('img');
        if (imageUrl) {
            img.src = imageUrl;
            img.alt = "Item Image";
        }

        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.textContent = itemText;

        itemCard.appendChild(img);
        itemCard.appendChild(itemName);

        itemGrid.appendChild(itemCard);

        itemInput.value = ''; // Clear the input field
        imageInput.value = ''; // Clear the image URL field
    }
});
