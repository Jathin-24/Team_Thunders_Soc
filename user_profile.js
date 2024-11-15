// Modal functionality for showing startup details
const modal = document.getElementById("idea-modal");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll(".cta-btn").forEach(button => {
    button.addEventListener("click", function() {
        modal.classList.add("show");
    });
});

closeModal.onclick = function() {
    modal.classList.remove("show");
};

// Close modal when clicked outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Function to toggle dropdowns
function toggleDropdown(linkId, dropdownId) {
    const dropdownLink = document.getElementById(linkId);
    const dropdown = document.getElementById(dropdownId);

    // Toggle visibility when link is clicked
    dropdownLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle('show');
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && event.target !== dropdownLink) {
            dropdown.classList.remove('show');
        }
    });
}

// Initialize the dropdowns
toggleDropdown('notifications-link', 'notifications-dropdown');
toggleDropdown('settings-link', 'settings-dropdown');

// Profile dropdown with delay
const profileName = document.querySelector('.profile-name');
const delayTime = 300;
let showTimeout, hideTimeout;

profileName.addEventListener('mouseenter', function() {
    clearTimeout(hideTimeout); // Clear any existing timeouts
    showTimeout = setTimeout(() => profileName.classList.add('show'), delayTime);
});

profileName.addEventListener('mouseleave', function() {
    clearTimeout(showTimeout); // Clear the show timeout
    hideTimeout = setTimeout(() => profileName.classList.remove('show'), delayTime);
});

profileName.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing dropdown when clicking on the profile itself
    profileName.classList.toggle('show');
});

// Close dropdown if clicking outside of the profile section
window.addEventListener('click', function(event) {
    if (!profileName.contains(event.target)) {
        profileName.classList.remove('show');
    }
});

// Popup functionality
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
