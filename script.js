const sidePanel = document.getElementById('sidePanel');
const closeBtn = document.getElementById('closeBtn');

settings.addEventListener('click', () => {
    sidePanel.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    sidePanel.classList.remove('open');
});

const themeToggle = document.getElementById("themeToggle");
    let isDark = false;

    themeToggle.addEventListener("click", () => {
        isDark = !isDark;

        if (isDark) {
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#ffffff";
            sidePanel.style.backgroundColor = "#000000";
            sidePanel.style.color = "#ffffff";
            themeToggle.src = "light.png";
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            sidePanel.style.backgroundColor = "#ffffff";
            sidePanel.style.color = "#000000";
            themeToggle.src = "dark.png";
        }
    });