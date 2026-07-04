// ======================================================
// Galala Hill Climb
// Main Application
// ======================================================

class App {

    constructor() {
        this.header = document.querySelector(".site-header");
        this.menuToggle = document.querySelector(".menu-toggle");
        this.navigation = document.querySelector(".main-nav");

        this.init();
    }

    init() {

        this.initNavigation();
        this.initScrollEffects();
        this.initAnimations();
        this.initBackToTop();

        console.log("✓ Galala Hill Climb Initialized");

    }

    // ==================================================
    // Navigation
    // ==================================================

    initNavigation() {

        // Header background on scroll
        if (this.header) {

            window.addEventListener("scroll", () => {

                if (window.scrollY > 80) {
                    this.header.classList.add("scrolled");
                } else {
                    this.header.classList.remove("scrolled");
                }

            });

        }

        // Mobile Menu
        if (this.menuToggle && this.navigation) {

            this.menuToggle.addEventListener("click", () => {

                this.navigation.classList.toggle("active");
                this.menuToggle.classList.toggle("active");

            });

        }

    }

    // ==================================================
    // Smooth Scroll
    // ==================================================

    initScrollEffects() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener("click", e => {

                const target = document.querySelector(anchor.getAttribute("href"));

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

    }

    // ==================================================
    // Page Animations
    // ==================================================

    initAnimations() {

        window.addEventListener("load", () => {

            document.body.classList.add("loaded");

        });

    }

    // ==========================
    // Back To Top
    // ==========================

    initBackToTop() {

        const button = document.getElementById("backToTop");

        if (!button) return;

        button.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

}

// ======================================================
// Start Application
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    new App();

});