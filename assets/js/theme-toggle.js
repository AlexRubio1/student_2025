const toggleButton = document.getElementById('toggle-theme');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeStylesheet.setAttribute('href', savedTheme);
}

// Toggle theme and save preference
toggleButton.addEventListener('click', () => {
    let newTheme = 'light-mode.css';
    if (themeStylesheet.getAttribute('href') === 'light-mode.css') {
        newTheme = 'dark-mode.css';
    }
    themeStylesheet.setAttribute('href', newTheme);
    localStorage.setItem('theme', newTheme);
});