// ***DATA ANIMATION START

document.addEventListener("DOMContentLoaded", function() {
    var animationContainers = document.querySelectorAll('[data-animation]');

    animationContainers.forEach(container => {
      var animationPath = container.getAttribute('data-animation');
      if (animationPath) {
        lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: animationPath
        });
      }
    });
  });


// ***DATA ANIMATION END

// ***TEXT ANIMATION START

let addAnimation = function () {
 $(".animate").each(function (index) {
   const text = new SplitType($(this), {
     types: "lines, words",
     lineClass: "word-line"
   });    let textInstance = $(this);
   let line = textInstance.find(".word-line");
   let word = line.find(".word");    let tl = gsap.timeline({
     scrollTrigger: {
       trigger: textInstance,
       start: "top 100%",
       end: "top 90%",
       onComplete: function () {
         $(textInstance).removeClass("animate");
       }
     }
   });    tl.set(textInstance, { opacity: 1 }).from(line, {
     y: "100%",
     duration: 0.4,
     opacity:0,
     stagger: 0.07,
     ease: "circ.out"
   });
 });
};addAnimation();window.addEventListener("resize", function (event) {
   if ($(window).width() >= 992) {addAnimation(); }
});

//*** TEXT ANIMATION END

// ***ANIMATE IN START

adocument.addEventListener('DOMContentLoaded', () => {
    const excludedClass = 'excl'; // Specify the class you want to exclude
    const items = document.querySelectorAll('.p-xl, .image-s, .button, h2, h3:not(.' + excludedClass + '), .content, .navcard, .quote-logo, .client-logos, .cms-card-item, .cms-card-feed, .ui-image, .image, .image-bg, .image-banner, .author, .publication-image, .comma, .button-ghost');
    let options = {
      rootMargin: '0px 0px 0%', // Adjust this value to trigger the animation earlier
      threshold: 0.1 // This can also be adjusted based on how early you want the animation to start
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a delay based on the index to stagger the animations
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }, index * 150); // Staggered delay
        }
      });
    }, options);

    items.forEach((item, index) => {
      observer.observe(item);
    });
    function animateEntry(entry) {
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }, 200); // No staggered delay when the page loads
    }

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Re-trigger animation on scroll for elements entering the viewport
    window.addEventListener('scroll', () => {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          const entry = {
            target: item,
            isIntersecting: true,
            intersectionRatio: 1
          };
          animateEntry(entry);
          observer.unobserve(item); // Unobserve after triggering animation
        }
      });
    });
  });

// ***ANIMATE IN END

//***NAV START

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('nav');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

//***NAV END

//***CMS START

$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 'auto',
    spaceBetween: "1%",
    rewind: true,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
//    autoplay: {
//     delay: 2000,
//    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 'auto',
        spaceBetween: "1%"
      },
      // tablet
      768: {
        slidesPerView: 'auto',
        spaceBetween: "1%"
      },
      // desktop
      992: {
        slidesPerView: 'auto',
        spaceBetween: "1%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
        scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});

//***CMS END
