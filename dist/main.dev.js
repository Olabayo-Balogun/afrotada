"use strict";

var hamburger = document.querySelector('#hamburger');
hamburger.addEventListener("click", function toggleNavigationBar() {
  var navigationBar = document.querySelector('nav');

  if (navigationBar.style.display === "none") {
    navigationBar.style.display = "block";
  } else {
    navigationBar.style.display = "none";
  }
});