const btn = document.querySelector('.btn');
const theme = localStorage.getItem('theme');


if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    setNightModeIcon(); 
} else {
    setDayModeIcon();
}

btn.addEventListener('click', () => {
    if (!document.body.classList.contains('dark-mode')) {
        addDarkMode();
        setNightModeIcon(); 
    } else {
        removeDarkMode();
        setDayModeIcon(); 
    }
});


function addDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}


function removeDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme');
}


function setDayModeIcon() {
    btn.innerHTML = '<i class="fas fa-sun"></i>';
}


function setNightModeIcon() {
    btn.innerHTML = '<i class="fas fa-moon"></i>';
}
