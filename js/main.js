const roundedCursor = document.querySelector('.rounded');

const moveCursor = (event) => {
    const { clientX, clientY } = event;

    // Adjust for scroll position
    const scrolledY = clientY + window.scrollY;

    // Update the rounded cursor position
    const roundedX = clientX - roundedCursor.offsetWidth /  2.6;
    const roundedY = scrolledY - roundedCursor.offsetHeight /  2.7;

    // Apply the transition for smooth movement
    roundedCursor.style.transition = 'transform 0.5s ease-out';
    roundedCursor.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
};


const resetCursor = () => {
    // Remove the transition when the cursor is not moving
    roundedCursor.style.transition = 'none';
};

window.addEventListener('mousemove', moveCursor);
window.addEventListener('mouseleave', resetCursor);


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // Function to open the popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';
}

// Function to close the popup
function closePopup(popupId){
  document.getElementById(popupId).style.display = 'none';
}

// Attach click event to the "View Bio" buttons
document.querySelectorAll('.open-popup-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var popupId = this.getAttribute('data-popup-id');
    openPopup(popupId);
  });
});

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Hide the loader once the page is fully loaded
  window.addEventListener("load", function () {
    var loader = document.getElementById("page-loader");
    loader.style.display = "none";
  });
});
