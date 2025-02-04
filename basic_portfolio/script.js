function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; 
    successMessage.innerHTML = `Form Submitted Successfully! Thank you, ${name}. We will contact you at ${email}.`;
}
