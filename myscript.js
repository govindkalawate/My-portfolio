// Attach a submit event listener to the form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Stop the default form submission behavior
    event.preventDefault();
    
    // Get form data
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let isClient = document.getElementById("isClient").checked;
    
    // Validate form data
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Prepare email message
    let subject = "New Contact Form Enquiry";
    let body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Phone: " + phone + "\n";
    body += "Message: " + message + "\n";
    if (isClient) {
      body += "I want you to work on a project with me.\n";
    }
    
    // Send email using SMTPJS
    Email.send({
      Host: "smtp.gmail.com",
      Username: "your_email@gmail.com",
      Password: "your_email_password",
      To: "your_email@gmail.com",
      From: email,
      Subject: subject,
      Body: body
    }).then(function() {
      // Reset form
      document.getElementById("contactForm").reset();
      // Show success message
      alert("Message sent successfully.");
    }).catch(function(error) {
      // Show error message
      alert("Error: " + error);
    });
  });
  