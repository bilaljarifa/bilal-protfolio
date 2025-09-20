
function toggelmenu() {
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".bilal-icon"); // fixed typo (was bilal-icno)
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
