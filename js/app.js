// owl carousel 
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    center: true,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    margin: 20,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
    }
  });
});

// video player
$('#play-video').on('click', function (e) {
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/Yu8kgtM57TE?si=xMs4EBd9gtUuSaGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// product modal javascript code

document.addEventListener('DOMContentLoaded', function () {
  const presaleButtons = document.querySelectorAll('.presaleButton');
  const popup = document.getElementById('popup');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const quantityDisplay = document.getElementById('quantity');
  let quantity = 1;

  presaleButtons.forEach(button => {
    button.addEventListener('click', function () {
      popup.style.display = 'flex';
      showStep('productSelection');
    });
  });

  document.getElementById('decreaseQty').addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  document.getElementById('increaseQty').addEventListener('click', function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  document.getElementById('shippingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    nextStep('paymentInfo');
  });

  document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    nextStep('congratulations');
  });
});

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(function (el) {
    el.classList.remove('active');
  });
  document.getElementById(step).classList.add('active');
  updateBreadcrumbs(step);
}

function updateBreadcrumbs(step) {
  if (step === 'shippingInfo' || step === 'paymentInfo' || step === 'congratulations') {
    document.getElementById('breadcrumbs').style.display = 'flex'; // Show breadcrumbs for relevant steps
  } else {
    document.getElementById('breadcrumbs').style.display = 'none'; // Hide breadcrumbs for initial step
  }

  document.querySelectorAll('.breadcrumb').forEach(function (el) {
    el.classList.remove('active');
  });
  document.getElementById('step' + step.charAt(0).toUpperCase() + step.slice(1)).classList.add('active');
}

function nextStep(step) {
  showStep(step);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


// wow Animation
new WOW().init();

// Moveable Image
document.addEventListener("DOMContentLoaded", function () {
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  let isMoved = false;

  function moveImages() {
    if (isMoved) {
      image1.style.left = '15px';
      image2.style.left = '-15px';
    } else {
      image1.style.left = '60px';
      image2.style.left = '-50px';
    }
    isMoved = !isMoved;
  }

  image1.addEventListener('click', moveImages);
  image2.addEventListener('click', moveImages);
});

// parallax 
var rellax = new Rellax('.rellax');

// toggle 
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function () {
  menutoggle.classList.toggle('active')
}

//////////////////// banner title animation
const texts = [
  "The GREATEST notebook for your free time.",
  "Discover new possibilities with our products.",
  "Experience innovation like never before."
];

const typingSpeed = 100; // Typing speed in ms
const delayBetweenCycles = 1000; // Delay before restarting
let index = 0;
let textIndex = 0;

function typeEffect() {
  const titleElement = document.getElementById("banner-title");

  if (index < texts[textIndex].length) {
    titleElement.innerHTML += texts[textIndex].charAt(index);
    index++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    // Pause before clearing and switching to the next sentence
    setTimeout(() => {
      index = 0;
      textIndex = (textIndex + 1) % texts.length; // Cycle through the sentences
      titleElement.innerHTML = "";
      typeEffect();
    }, delayBetweenCycles);
  }
}

// Start typing effect on page load
window.onload = typeEffect;



// modal show in scroll
$(document).ready(function () {
  // Check if the session cookie is set
  if (!sessionStorage.getItem('popupShown')) {
    var hasScrolled = false;

    $(window).scroll(function () {
      // Check if the modal has been shown and if the user has scrolled halfway down the page
      if (!hasScrolled && $(window).scrollTop() > ($(window).height() / 2)) {
        // Show the modal
        $('#exampleModal').modal('show');

        // Set the session cookie to indicate that the popup has been shown
        sessionStorage.setItem('popupShown', 'true');

        // Set the flag to prevent further scrolls from triggering the modal
        hasScrolled = true;
      }
    });

    // Add an event listener to the modal close button to clear the session cookie
    $('#exampleModal').on('hidden.bs.modal', function () {
      sessionStorage.removeItem('popupShown');
    });
  }
});

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


