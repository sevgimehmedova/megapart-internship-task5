$(document).ready(function () {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Header Animation (Parallax Effect)
    var headerParallax = new ScrollMagic.Scene({
        triggerElement: ".header-section",
        triggerHook: 0,
        duration: "100%",
    })
        .setTween(".header-section", { y: "80%", ease: "linear" })
        .addTo(controller);

    function changeNavAppearance() {
        if ($(window).scrollTop() > $(".header-section").height()) {
            $(".navbar").addClass("navbar-scrolled");
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }
    }

     $(window).on("scroll", changeNavAppearance);

    // Animated Content Reveal
    $(".fade-in").each(function () {
        var imgFadeIn = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9, 
            reverse: false,
        })
            .setClassToggle(this, "fade-in")
            .addTo(controller);
    });

    changeNavAppearance();

    // Call the function when scrolling
    $(window).on("scroll", changeNavAppearance);

    // Scroll-Triggered Transform
    var scaleElement = new ScrollMagic.Scene({
        triggerElement: ".scroll-triggered-transform",
        triggerHook: 0.5,
        duration: "100%",
    })
        .setTween(".element-to-scale", { scale: 3 })
        .addTo(controller);

});

$(document).ready(function () {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Flag to track if the typewriter animation is active
    var isTyping = false;

    // Create a scene for the typewriter effect
    var typewriterScene = new ScrollMagic.Scene({
        triggerElement: ".text-animation", // Trigger when the text-animation section enters the viewport
        triggerHook: 0.8, // Adjust this value to control when the animation starts
        reverse: true, // Allow the animation to reverse when scrolling up
    })
    .on("start", function (event) {
        // Check if the animation is not active and the user is scrolling down
        if (!isTyping && event.scrollDirection === "FORWARD") {
            // Use SplitType to animate the typewriter effect
            var split = new SplitType(".typewriter-text", { typeset: true });
            var tl = gsap.timeline();

            tl.staggerFrom(split.chars, 0.1, {
                opacity: 0,
                y: 20,
                ease: "power4.inOut",
            }, 0.05);

            // Set the animation flag to true
            isTyping = true;

            // Return the animation timeline
            return tl;
        }
        // If scrolling up, set the animation flag to false
        else {
            isTyping = false;
        }
    })
    .addTo(controller);
});
// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create ScrollMagic scenes for each image to trigger fade-in
$(".fade-in").each(function () {
    var imgFadeIn = new ScrollMagic.Scene({
        triggerElement: this, 
        triggerHook: 0.9, // Adjust this value to control when the animation starts
        reverse: false, // Set to false to only play the animation once
    })
    .setClassToggle(this, "fade-in-visible") // Add the "fade-in-visible" class to trigger the fade-in effect
    .addTo(controller); // Add the scene to the ScrollMagic controller
});
document.addEventListener("DOMContentLoaded", function () {
   
    var resetButton = document.getElementById("resetButton");

 
    resetButton.addEventListener("click", function () {
       
        window.scrollTo({ top: 0, behavior: 'smooth' });

        resetTypewriterAnimation();

    });
    function resetTypewriterAnimation() {
        typewriterScene.enabled(false);
        typewriterScene.enabled(true);
    }
});
