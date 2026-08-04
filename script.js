// Find the button
const themeButton = document.getElementById("theme-btn");

// Toggle Dark Mode
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Dark Mode";
    }

}

// Listen for button click
themeButton.addEventListener("click", toggleTheme);

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}
