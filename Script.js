// Add this script for button interaction (neon effect with clicks)

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        // Toggle neon glow effect on click
        button.classList.toggle("active-neon");
    });
});

// You can also apply any additional functionality you'd like when button is clicked.
