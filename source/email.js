let message = document.getElementById("message");


function email() {
  if (message.value === "") {
    alert("Please enter a message.");
  } else {
    fetch('source/email.php', {
    fetch('https://transtracheal-savanna-unfederative.ngrok-free.dev/email/email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message.value })
    })
    .then(res => res.json())
    .then(data => {console.log('Server response:', data)
    if (data.status === 'success') {
        showAlert();   
    } else {
        alert("There was an error sending your message. Please try again.");
    }
    })
    .catch(err => console.error('Error:', err));
    message.value = "";
  }
}
<<<<<<< HEAD








function showAlert() {
    const alertBox = document.getElementById("alert-2");

    // Unhide first
    alertBox.classList.remove("hidden");
    alertBox.classList.add("flex");

    // Trigger reflow so transition works
    void alertBox.offsetWidth;

    // Fade in
    alertBox.classList.remove("opacity-0");
    alertBox.classList.add("opacity-100");

    setTimeout(() => {
        hideAlert();
    }, 2000); // Hide after 3 seconds
}

function hideAlert() {
    const alertBox = document.getElementById("alert-2");

    // Fade out
    alertBox.classList.remove("opacity-100");
    alertBox.classList.add("opacity-0");

    // After transition ends, hide completely
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 500); // match duration-500
}