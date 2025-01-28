// Get references to DOM elements
const purchaseButton = document.getElementById('purchase-button');
const modal = document.getElementById('popup-modal');
const closeModal = document.getElementById('close-modal');

// Event listener for "Buy Now" button click
purchaseButton.addEventListener('click', function() {
    modal.style.display = 'flex';  // Show the modal
    setTimeout(() => {
        modal.style.opacity = '1';  // Fade in the modal
    }, 50);  // Small delay to trigger the opacity transition
});

// Event listener for closing the modal
closeModal.addEventListener('click', function() {
    modal.style.opacity = '0';  // Fade out the modal
    setTimeout(() => {
        modal.style.display = 'none';  // Hide the modal after fading out
    }, 300);  // Matches the transition time
});
