document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
        const mainImage = document.querySelector(".product-main-image");
        mainImage.src = this.src;
    });
});

///

// Get elements
const secondModalOpenBtn = document.getElementById('second_modal_openModal');
const secondModalCloseBtn = document.getElementById('second_modal_closeModal');
const secondModal = document.getElementById('second_modal_myModal');

// Open modal
secondModalOpenBtn.addEventListener('click', () => {
    secondModal.style.display = 'block';
});

// Close modal
secondModalCloseBtn.addEventListener('click', () => {
    secondModal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === secondModal) {
        secondModal.style.display = 'none';
    }
});  


function copyToClipboard() {
    const embedCode = document.querySelector('.embed-code');
    embedCode.select();
    document.execCommand('copy');
    alert('HTML code copied to clipboard!');
  }