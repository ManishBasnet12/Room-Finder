// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    // Validate form fields
    if (validateForm(name, phone, age, email)) {
      // Store data in sessionStorage
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("age", age);
      sessionStorage.setItem("email", email);

      // Redirect to thank you page
      window.location.href = "thankyou.html";
    }
  });

  function validateForm(name, phone, age, email) {
    const nameRegex = /^[A-Za-z\s]+$/; // Regex for names (letters and spaces)
    const phoneRegex = /^\d{10}$/; // Example regex for a valid phone number (10 digits)

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      return false;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (age < 18 || age > 100) {
      alert("Please enter a valid age (18-100).");
      return false;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return emailRegex.test(email);
  }
});




const offCanvasmenu = document.querySelector(".off-canvas");
const offCanvasclosemenu = document.querySelector(".off-canvas-close");
const offCanvasopenmenu = document.querySelector(".menu");

offCanvasopenmenu.addEventListener("click", function () {
  offCanvasmenu.classList.add("show");
});

offCanvasclosemenu.addEventListener("click", function () {
  offCanvasmenu.classList.remove("show");
});
