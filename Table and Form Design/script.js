document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    if (fullName && email && course) {
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        successMessage.innerHTML = `Form Submitted Successfully! Thank you, ${fullName}. We will contact you at ${email} for the ${course} course.`;
    }
});
