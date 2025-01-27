function submitForm() {
    var name = document.querySelector('.contact-form input[placeholder="Your Name *"]').value.trim();
    var email = document.querySelector('.contact-form input[placeholder="Your Email *"]').value.trim();
    var subject = document.querySelector('.contact-form input[placeholder="Your Subject *"]').value.trim();
    var message = document.querySelector('.contact-form textarea[placeholder="Your Message *"]').value;
  
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
  
    if (email === '') {
      alert('Please enter your email.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (subject === '') {
      alert('Please enter a subject.');
      return;
    }
  
    document.querySelector('.contact-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'flex';
  }
  
  function hideSuccessMessage() {
    document.getElementById('success-message').style.display = 'none';
    document.querySelector('.contact-form').style.display = 'block';
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


//   certificate
// Function to open the modal with the image and caption
function openModal(certId) {
    const imageElement = document.getElementById(certId);  // Get the image by its ID
    const modalImage = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    modalImage.src = imageElement.src;  // Set the full-size image
    modalCaption.innerHTML = imageElement.alt;  // Set the image caption

    // Display the modal
    document.getElementById("modal01").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal01").style.display = "none";
}
