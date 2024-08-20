document.getElementById('addItem').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const imageInput = document.getElementById('imageInput');
    const detailsInput = document.getElementById('detailsInput');
    const itemText = itemInput.value.trim();
    const imageUrl = imageInput.value.trim();
    const itemDetails = detailsInput.value.trim();

    if (itemText !== "") {
        const itemGrid = document.getElementById('itemGrid');

        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';

        const img = document.createElement('img');
        if (imageUrl) {
            img.src = imageUrl;
            img.alt = "Item Image";
        }

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        
        const itemName = document.createElement('div');
        itemName.className = 'item-name';
        itemName.textContent = itemText;

        const itemDetailsDiv = document.createElement('div');
        itemDetailsDiv.className = 'item-details';
        itemDetailsDiv.textContent = itemDetails;

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemDetailsDiv);

        itemCard.appendChild(img);
        itemCard.appendChild(itemInfo);

        // Toggle item details on click
        itemCard.addEventListener('click', function() {
            itemCard.classList.toggle('active');
        });

        itemGrid.appendChild(itemCard);

        itemInput.value = ''; // Clear the input field
        imageInput.value = ''; // Clear the image URL field
        detailsInput.value = ''; // Clear the details field
    }
});

// Optional: Close details on clicking outside the item card
document.addEventListener('click', function(event) {
    if (!event.target.closest('.item-card')) {
        document.querySelectorAll('.item-card.active').forEach(card => card.classList.remove('active'));
    }
});
