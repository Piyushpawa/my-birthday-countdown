// Function to update birthday countdown
function updateBirthdayCountdown() {
    let birthdayDate = new Date("2025-07-07"); // Replace with your birthday date (YYYY-MM-DD)
    let now = new Date().getTime();
    let remainingTime = birthdayDate - now;
  
    if (remainingTime <= 0) {
      clearInterval(birthdayCountdownInterval);
      // If the birthday date has passed, display "Happy Birthday!"
      document.querySelector(".countdown").innerHTML = "<h1>Happy Birthday!</h1>";
  
      // Display confetti animation when the countdown expires
      displayConfetti();
  
      // Trigger SweetAlert2 popup for birthday greeting
      displayBirthdayPopup();
    } else {
      let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      document.getElementById("day-box").textContent = days.toString().padStart(2, '0');
      document.getElementById("hr-box").textContent = hours.toString().padStart(2, '0');
      document.getElementById("min-box").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("sec-box").textContent = seconds.toString().padStart(2, '0');
    }
  }
  
  // Call updateBirthdayCountdown function initially to avoid initial delay
  updateBirthdayCountdown();
  
  // Update countdown every second
  let birthdayCountdownInterval = setInterval(updateBirthdayCountdown, 1000);
  
  // Function to display confetti animation
  function displayConfetti() {
    // Confetti animation code remains the same as provided in the previous example
    // ...
  
    // Start the confetti animation loop
    confettiLoop();
  }
  
  // Function to display SweetAlert2 popup for birthday greeting
  function displayBirthdayPopup() {
    Swal.fire({
      title: 'Happy Birthday!',
      html: '🎉🎂🥳<br>Celebrate this special day!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close'
    });
  }
