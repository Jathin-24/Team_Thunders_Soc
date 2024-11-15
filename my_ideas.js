// Modal functionality for showing startup details
const modal = document.getElementById("idea-modal");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll(".cta-btn").forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicked outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


document.querySelectorAll(".cta-btn").forEach(button => {
    button.addEventListener("click", function() {
        modal.classList.add("show");
    });
});

closeModal.onclick = function() {
    modal.classList.remove("show");
};

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Get references to the elements
const notificationsLink = document.getElementById('notifications-link');
const notificationsDropdown = document.getElementById('notifications-dropdown');

// Toggle the dropdown visibility when "Notifications" is clicked
notificationsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    
    // Toggle the 'show' class to display or hide the dropdown
    notificationsDropdown.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!notificationsDropdown.contains(event.target) && event.target !== notificationsLink) {
        notificationsDropdown.classList.remove('show');
    }
});


// Get the profile element and dropdown content
const profileName = document.querySelector('.profile-name');
const dropdownContent = document.querySelector('.dropdown-content');

// Delay time in milliseconds (e.g., 300ms)
const delayTime = 300;

// Show dropdown after a delay when hovering over the profile name
let showTimeout;
profileName.addEventListener('mouseenter', function() {
    clearTimeout(showTimeout); // Clear any previous timeouts to avoid multiple triggers
    showTimeout = setTimeout(function() {
        profileName.classList.add('show');
    }, delayTime); // Wait for 300ms before showing the dropdown
});

// Hide dropdown after a delay when leaving the profile name
let hideTimeout;
profileName.addEventListener('mouseleave', function() {
    clearTimeout(hideTimeout); // Clear any previous timeouts
    hideTimeout = setTimeout(function() {
        profileName.classList.remove('show');
    }, delayTime); // Wait for 300ms before hiding the dropdown
});

// Toggle dropdown visibility when clicking on the profile name
profileName.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing the dropdown when clicking on the profile itself
    if (profileName.classList.contains('show')) {
        profileName.classList.remove('show');
    } else {
        profileName.classList.add('show');
    }
});

// Close dropdown if clicking outside of the profile section
window.addEventListener('click', function(event) {
    if (!profileName.contains(event.target)) {
        profileName.classList.remove('show');
    }
});


// Get references to elements
const openPopup = document.getElementById('view-profile-btn');
const closePopup = document.getElementById('close-popup');
const popup = document.getElementById('popup');

// Open the popup when the link is clicked
openPopup.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup.style.display = 'flex'; // Show the popup (change to flex to center it)
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the popup content
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup if the outer area is clicked
    }
});

