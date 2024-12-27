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

///////////////////////////////////
function copyToClipboard() {
  // Get the textarea element
  var copyText = document.getElementById("embedCode");

  // Use the Clipboard API to copy the content
  navigator.clipboard.writeText(copyText.value).then(function () {
    // Success callback
    var alertBox = document.getElementById("customAlert");
    alertBox.classList.add("show-alert");

    // Hide the alert after 2 seconds
    setTimeout(function () {
      alertBox.classList.remove("show-alert");
    }, 2000);
  }).catch(function (err) {
    // Error callback
    alert("Failed to copy text: " + err);
  });
}

//   ////////////////////////////


const selectElement = document.getElementById('deliveryOption');
const localLink = document.getElementById('localLink');

selectElement.addEventListener('change', () => {
  if (selectElement.value === 'pickup') {
    localLink.classList.remove('d-none'); // Show the link
  } else {
    localLink.classList.add('d-none'); // Hide the link
  }
})

// input refer js
document.addEventListener("DOMContentLoaded", function () {
  const referBtn = document.getElementById("referBtn");
  const referenceInput = document.getElementById("referenceInput");

  referBtn.addEventListener("click", function (event) {
    event.preventDefault();
    referBtn.style.display = "none";
    referenceInput.style.display = "block";
  });
});
