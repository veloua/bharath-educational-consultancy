// =========================
// SCROLL ANIMATIONS
// =========================

const animatedElements = document.querySelectorAll(
    ".course-card, .help-card, .why-card, .step, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    element.classList.add("animate");
    observer.observe(element);
});
// =========================
// WHATSAPP ENQUIRY FORM
// =========================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "919700688418";

        const whatsappMessage =
            "Hello Bharath Educational Consultancy,%0A%0A" +
            "*New Enquiry*%0A%0A" +
            "*Name:* " + encodeURIComponent(name) + "%0A" +
            "*Phone:* " + encodeURIComponent(phone) + "%0A" +
            "*Course:* " + encodeURIComponent(course) + "%0A" +
            "*Message:* " + encodeURIComponent(message);

        const whatsappURL =
            "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

        window.open(whatsappURL, "_blank");

    });
}
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
        });

    });
}