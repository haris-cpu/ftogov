document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded");

  // Check if this is the user's first visit to this tab in this session
  if (!sessionStorage.getItem("languageSelected")) {
      // Show the language modal if no language is selected
      document.getElementById("languageModal").style.display = "flex";
  } else {
      // If the language was selected before, display the page content
      document.getElementById("page-content").style.display = "block";
  }
});

let slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function changeSlide(direction) {
  slides[currentSlide].style.display = 'none';
  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].style.display = 'block';
}

// Language Modal Logic
document.getElementById("englishBtn").onclick = function () {
  document.getElementById("greeting").innerHTML = "Welcome to the Federal Tax Ombudsman website";
  document.getElementById("description").innerHTML = "Providing a fair and transparent tax system.";
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("page-content").style.display = "block";

  // Set a flag in sessionStorage to indicate language selection
  sessionStorage.setItem("languageSelected", "true");
}

document.getElementById("urduBtn").onclick = function () {
  document.getElementById("greeting").innerHTML = "فیڈرل ٹیکس آمبرڈسمین ویب سائٹ پر خوش آمدید";
  document.getElementById("description").innerHTML = "ایک منصفانہ اور شفاف ٹیکس نظام فراہم کرنا۔";
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("page-content").style.display = "block";

  // Set a flag in sessionStorage to indicate language selection
  sessionStorage.setItem("languageSelected", "true");
}

// Prevent reloading when clicking on internal links (like #contactUs)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get the id of the target
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Scroll smoothly to the target element
          targetElement.scrollIntoView({ behavior: "smooth" });
      }
  });
});



