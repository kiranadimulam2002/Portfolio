
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
    }
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");

    if (!themeToggle) return;

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("light-mode");
        themeToggle.textContent = "🌙";
    }
});


function handleSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields!");
        return;
    }

    // ✅ Replace this with YOUR email
    const myEmail = "adimulamkiran2@gmail.com";

    // Construct mailto link (user email included in body)
    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open user's default email client
    window.location.href = mailtoLink;

    // Optional feedback message
    alert(
        "Opening your email client... If it doesn't open, please email directly to adimulamkiran2@gmail.com"
    );
}


// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links a");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});
