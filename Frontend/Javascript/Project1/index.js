document.addEventListener("DOMContentLoaded", () => {
    // Using querySelector to select elements
    const signupForm = document.querySelector("#signup-form");
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirm-password");
    const signupBtn = document.querySelector("#signupBtn");
  
    // Event listener for form submission
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting (page reload)
  
      // Get form input values
      const username = usernameInput.value.trim();//trim() is used to avoid the white space.
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      // Validation: Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      // Validation: Check if the fields are not empty
      if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
      }
  
      // Create a new user object
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
  
      // Retrieve existing users from localStorage, if any
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if email already exists
      if (users.some(user => user.email === email)) {
        alert("This email is already registered.");
        return;
      }
  
      // Add the new user to the users array
      users.push(newUser);
  
      // Store the updated users array in localStorage
      localStorage.setItem("users", JSON.stringify(users));
  
      // Display success message
      alert("User registered successfully!");
  
      // Redirect the user to a new page (e.g., welcome page)
      window.location.href = "welcome.html"; // Replace with the path to your desired page
    });
  });