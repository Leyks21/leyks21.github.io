// Function to toggle Dark Mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    
    // Toggles the 'dark-mode' class on the body tag
    document.body.classList.toggle('dark-mode');

    // Optional: Change the button text/icon when toggled
    const button = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.innerHTML = '☀️ Light Mode';
    } else {
        button.innerHTML = '🌙 Dark Mode';
    }
});