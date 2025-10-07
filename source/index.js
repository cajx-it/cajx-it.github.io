let input = document.getElementById("input");
let button = document.getElementById("button");
let container = document.getElementById("container");
let loading = document.getElementById("loader");
let loaderText = document.getElementById("loader-text");
let navbar = document.getElementById("navbar");
let body = document.getElementById("body");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");

input.value = "";

button.addEventListener("click", function(event) {
    event.preventDefault();
    let inputValue = input.value;   
    console.log(inputValue);

    if(inputValue) {
        
        container.classList.add("hidden");
        navbar.classList.add("hidden");
        about.classList.add("hidden");
        contact.classList.add("hidden");
        footer.classList.add("hidden");
        body.classList.add("h-[100vh]", "flex", "justify-center", "items-center");
        loading.classList.remove("hidden");
        loaderText.classList.remove("hidden");

        setTimeout(() => {
            // window.location.href = "id.php?id=" + inputValue;
            window.location.href = "id.html";
        }, 3000);
 

    }else {
        showAlert();
    }
});

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