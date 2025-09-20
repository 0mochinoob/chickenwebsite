document.addEventListener('DOMContentLoaded', () => {
    const settingsBtn = document.getElementById('settings');
    const sidePanel = document.getElementById('sidePanel');
    const closeBtn = document.getElementById('closeBtn');

    const onAnimationEnd = () => {
        settingsBtn.classList.remove('rotating');
        settingsBtn.classList.add('rotated');
        sidePanel.classList.add('open');
        settingsBtn.removeEventListener('animationend', onAnimationEnd);
    };

    settingsBtn.addEventListener('click', () => {
        if (settingsBtn.classList.contains('rotated') || settingsBtn.classList.contains('rotating')) {
            return;
        }
        settingsBtn.classList.add('rotating');
        settingsBtn.addEventListener('animationend', onAnimationEnd);
    });

    closeBtn.addEventListener('click', () => {
        sidePanel.classList.remove('open');
        settingsBtn.classList.remove('rotated');
    });
});

const toggleTheme = () => {
  document.body.classList.toggle("dark");
};

const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById('logo');
const setting = document.getElementById('settings');
    let isDark = false;

    themeToggle.addEventListener("click", () => {
        isDark = !isDark;

        if (isDark) {
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#ffffff";
            sidePanel.style.backgroundColor = "#000000";
            sidePanel.style.color = "#ffffff";
            themeToggle.src = "light.png";
            logo.src = 'logodark.png';
            setting.src = 'settingdark.png';
            closeBtn.src = 'closedark.png';
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            sidePanel.style.backgroundColor = "#ffffff";
            sidePanel.style.color = "#000000";
            themeToggle.src = "dark.png";
            logo.src = 'logo.png';
            setting.src = 'setting.png';
            closeBtn.src = 'close.png';
        }
    });

