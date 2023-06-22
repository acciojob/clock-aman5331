//your JS code here. If required.
function updateTimer() {
      const timerElement = document.getElementById('timer');

      // Get the current date and time
      const currentDate = new Date();

      // Format the date and time
      const dateTimeString = currentDate.toLocaleString();

      // Update the timer element with the formatted date and time
      timerElement.textContent = dateTimeString;
    }

    // Call the updateTimer function initially to display the current date and time
    updateTimer();

    // Update the timer every second
    setInterval(updateTimer, 1000);
