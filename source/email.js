let message = document.getElementById("message");

function email() {
  if (message.value === "") {
    alert("Please enter a message.");
  } else {
    fetch('source/email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message.value })
    })
    .then(res => res.json())
    .then(data => console.log('Server response:', data))
    .catch(err => console.error('Error:', err));
    message.value = "";
  }
}