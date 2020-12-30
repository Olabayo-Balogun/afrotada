let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener("click", function toggleNavigationBar() {
    let navigationBar = document.querySelector('nav');
    if (navigationBar.style.display === "none") {
    navigationBar.style.display = "block";
    } else {
    navigationBar.style.display = "none";
    }
});
