document.addEventListener("DOMContentLoaded", function () {
	// --- Form Submission Alert ---
	const contactForm = document.getElementById("contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", function (event) {
			// Prevent the default form submission which reloads the page
			event.preventDefault();

			// Show a confirmation alert
			alert("Thank you for reaching out. We’ll get back to you soon.");

			// Optionally, you can reset the form fields after submission
			contactForm.reset();
		});
	}

	// --- Back to Top Button ---
	const backToTopButton = document.getElementById("back-to-top");

	if (backToTopButton) {
		// Show or hide the button based on scroll position
		window.addEventListener("scroll", function () {
			// Show button if user has scrolled down 200px
			if (window.pageYOffset > 200) {
				backToTopButton.style.display = "block";
			} else {
				backToTopButton.style.display = "none";
			}
		});

		// Smooth scroll to top when the button is clicked
		backToTopButton.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	// --- Smooth Scrolling for Nav Links (Redundant with CSS but good for cross-browser) ---
	// The `scroll-behavior: smooth;` in CSS handles this for modern browsers.
	// This JS is a fallback and offers more control if needed.
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// --- FAQ Accordion ---
	const accordions = document.getElementsByClassName("accordion");

	for (let i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener("click", function () {
			// Toggle the 'active' class for styling (like changing the icon)
			this.classList.toggle("active");

			// Toggle the panel's visibility
			const panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null; // Collapse the panel
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px"; // Expand the panel
			}
		});
	}
});
