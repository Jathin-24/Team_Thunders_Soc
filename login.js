const google_email_investor = "investor@gmail.com";
const google_password_investor = "investor";

const facebook_email_investor = "investor@gmail.com";
const facebook_password_investor = "investor";

const linkedin_email_investor = "investor@gmail.com";
const linkedin_password_investor = "investor";

const google_email_creator = "creator@gmail.com";
const google_password_creator = "creator";

const facebook_email_creator = "creator@gmail.com";
const facebook_password_creator = "creator";

const linkedin_email_creator = "creator@gmail.com";
const linkedin_password_creator = "creator";

const universal_email_creator = "creator@123";
const universal_password_creator = "123";

const universal_email_investor = "investor@123";
const universal_password_investor = "123";



// Function to switch between login and sign-up forms
function showSignUp() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("google-form").style.display = "none";
  document.getElementById("facebook-form").style.display = "none";
  document.getElementById("linkedin-form").style.display = "none";
  document.getElementById("sign-up-form").style.display = "block";
}

function showLogin() {
  document.getElementById("sign-up-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}


function showLoginGoogle(){
  document.getElementById("login-form").style.display= "none";
  document.getElementById("google-form").style.display= "block";
}

function showLoginFacebook(){
  document.getElementById("login-form").style.display= "none";
  document.getElementById("facebook-form").style.display= "block";
}

function showLoginLinkedIn(){
  document.getElementById("login-form").style.display= "none";
  document.getElementById("linkedin-form").style.display= "block";
}

function signup(){
  alert("Account Created Successfully!......");
}
// Simulate login through social media
function signUpWithGoogle() {
  alert("Signing up with Google...");
  // Add actual Google login API here
  hideLoginForm();
  showRoleSelection();
}

function signUpWithFacebook() {
  alert("Signing up with Facebook...");
  // Add actual Facebook login API here
  hideLoginForm();
  showRoleSelection();
}

function signUpWithLinkedIn() {
  alert("Signing up with LinkedIn...");
  // Add actual LinkedIn login API here
  hideLoginForm();
  showRoleSelection();
}

// Handle email login
function submitEmailLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(`Email: ${email}, Password: ${password}`);
  // Send email and password to the backend for validation
  hideLoginForm();
  login();
  // showRoleSelection();
}

// Handle email sign up
function submitEmailSignUp(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  console.log(`Email: ${email}, Password: ${password}`);
  // Send email and password to backend to create account
  hideLoginForm();
  window.location.href;
  // showRoleSelection();
}

// Hide the Login Form (container)
function hideLoginForm() {
  const container = document.querySelector(".container");
  container.style.display = "none"; // Hide the entire container
}

// Show Role Selection Page after login/signup
function showRoleSelection() {
  const roleSelection = document.getElementById("role-selection");
  roleSelection.style.display = "block"; // Show the Role Selection page
  roleSelection.classList.add("fade-in"); // Optional: Add fade-in animation
}

// Show Profile Setup Page based on the selected role
function showProfileSetup() {
  document.getElementById("role-selection").style.display = "none"; // Hide Role Selection
  document.getElementById("profile-setup").style.display = "block"; // Show Profile Setup page
}

// Select Role (Creator or Investor)
function selectRole(role) {
  showProfileSetup();
  setupProfile(role);
}

// Set up profile form based on selected role
function setupProfile(role) {
  const additionalFields = document.getElementById("additional-fields");
  additionalFields.innerHTML = ""; // Clear previous fields

  if (role === "creator") {
    additionalFields.innerHTML = `
        <input type="text" id="startup-name" placeholder="Startup Name" required />
        <textarea id="skills" placeholder="Skills (comma separated)" required></textarea>
        <input type="text" id="categories" placeholder="Startup Categories (e.g., SaaS, Fintech)" required />
        <textarea id="startup-idea" placeholder="Describe Your Startup Idea" required></textarea>
      `;
  } else if (role === "investor") {
    additionalFields.innerHTML = `
        <textarea id="investment-interests" placeholder="Investment Interests" required></textarea>
        <input type="number" id="capital" placeholder="Amount of Capital Willing to Invest" required />
      `;
  }
}

// Submit the profile setup data
function submitProfileSetup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;

  console.log(`Name: ${name}, Bio: ${bio}`);
  // Collect additional data for the specific role
  const role = document.getElementById("startup-name") ? "creator" : "investor";
  if (role === "creator") {
    const startupName = document.getElementById("startup-name").value;
    const skills = document.getElementById("skills").value;
    const categories = document.getElementById("categories").value;
    const idea = document.getElementById("startup-idea").value;
    console.log(
      `Creator Data: ${startupName}, ${skills}, ${categories}, ${idea}`
    );
  } else {
    const investmentInterests = document.getElementById(
      "investment-interests"
    ).value;
    const capital = document.getElementById("capital").value;
    console.log(`Investor Data: ${investmentInterests}, Capital: ${capital}`);
  }
  alert("Profile setup completed!");
  // Send profile data to the backend to save user details
}

// Simulated credentials for demonstration (you would typically fetch these from a backend)
// login.js

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally
  });
  
  function login() {
  // Get the username and password entered by the user
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check if the entered username matches and if the password is correct
  if (universal_email_creator == email && universal_password_creator == password) {
    window.location.href = "user_profile.html";
  } else if (universal_email_investor == email && universal_password_investor == password) {
    // Redirect to the dashboard if credentials are valid
    window.location.href = "dashboard_afterlogin.html"; // Dashboard page
  } else {
    // Show error message if credentials are invalid
    alert("Invalid credentials");
  }
}

function Googlelogin() {
  // Get the username and password entered by the user
  let email = document.getElementById("login-google-email").value;
  let password = document.getElementById("login-google-password").value;

  // Check if the entered username matches and if the password is correct
  if (google_email_creator == email && google_password_creator == password) {
    window.location.href = "user_profile.html";
    alert("Welcome Creator");
  } else if (google_email_investor == email && google_password_investor == password) {
    // Redirect to the dashboard if credentials are valid
    window.location.href = "dashboard_afterlogin.html"; // Dashboard page
    alert("Welcome Investor");
  }else {
    // Show error message if credentials are invalid
    alert("Invalid credentials");
  }
}

function Facebooklogin() {
  // Get the username and password entered by the user
  let email = document.getElementById("login-facebook-email").value;
  let password = document.getElementById("login-facebook-password").value;

  // Check if the entered username matches and if the password is correct
 if (facebook_email_creator == email && facebook_password_creator == password) {
    
    window.location.href = "user_profile.html";
    alert("Welcome Creator");
  }else if (facebook_email_investor == email && facebook_password_investor == password) {
    // Redirect to the dashboard if credentials are valid
    window.location.href = "dashboard_afterlogin.html"; // Dashboard page
    alert("Welcome Investor");
  } else {
    // Show error message if credentials are invalid
    alert("Invalid credentials");
  }
}
function LinkedInlogin() {
  // Get the username and password entered by the user
  let email = document.getElementById("login-linkedin-email").value;
  let password = document.getElementById("login-linkedin-password").value;

  // Check if the entered username matches and if the password is correct
 if (linkedin_email_creator == email && linkedin_password_creator == password) {
    window.location.href = "user_profile.html";
    alert("Welcome Creator");
  }else if (linkedin_email_investor == email && linkedin_password_investor == password) {
    // Redirect to the dashboard if credentials are valid
    window.location.href = "dashboard_afterlogin.html"; // Dashboard page
    alert("Welcome Investor");
  } else {
    // Show error message if credentials are invalid
    alert("Invalid credentials");
  }
}


// Prevent the form from submitting (if necessary) and redirect if using a submit handler
function submitEmailLogin(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  login(); // Call the login function instead
}
