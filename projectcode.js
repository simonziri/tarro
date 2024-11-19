// ***DATA ANIMATION START
/*

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
*/
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


//***CATEGORY TAGS START
window.onload = function() {
    var categories = document.querySelectorAll('.categories');

    categories.forEach(function(categoryDiv) {
        var categoryChildren = categoryDiv.querySelectorAll('.category');

        if (categoryChildren.length === 1 || categoryDiv === categoryDiv.parentNode.lastChild) {
            var lastCategory = categoryDiv.querySelector('.category:last-child');
            var commaElement = lastCategory.querySelector('.comma');
            if (commaElement) {
                commaElement.parentNode.removeChild(commaElement);
            }
        }
    });
};


//***CATEGORY TAGS END

//***FORM DROPDOWN START
  $( document ).ready(function() {
     $('.select-form').each( function () {
        $(this).children('option:first').attr("disabled", "disabled").css("color", "#999");
    });
});
//***FORM DROPDOWN END



//***EQUALIZE HEIGHTS START

function equalizeHeightsWithinGroups() {
        const wrappers = document.querySelectorAll('.card-wrapper');

        wrappers.forEach(wrapper => {
            const cards = Array.from(wrapper.querySelectorAll('.card-js'));

            if (cards.length > 0) {
                const maxHeights = { heading: 0, paragraph: 0, button: 0 };

                // Reset heights to auto before measuring
                cards.forEach(card => {
                    card.querySelector('.card-heading').style.height = 'auto';
                    card.querySelector('.card-p').style.height = 'auto';
                    if (card.querySelector('.card-cta')) {
                        card.querySelector('.card-cta').style.height = 'auto';
                    }
                });

                cards.forEach(card => {
                    const headingHeight = card.querySelector('.card-heading').getBoundingClientRect().height;
                    const paragraphHeight = card.querySelector('.card-p').getBoundingClientRect().height;
                    let buttonHeight = 0;

                    if (card.querySelector('.card-cta')) {
                        buttonHeight = card.querySelector('.card-cta').getBoundingClientRect().height;
                    }

                    maxHeights.heading = Math.max(maxHeights.heading, headingHeight);
                    maxHeights.paragraph = Math.max(maxHeights.paragraph, paragraphHeight);
                    maxHeights.button = Math.max(maxHeights.button, buttonHeight);
                });

                cards.forEach(card => {
                    card.querySelector('.card-heading').style.height = `${maxHeights.heading}px`;
                    card.querySelector('.card-p').style.height = `${maxHeights.paragraph}px`;

                    if (card.querySelector('.card-cta')) {
                        card.querySelector('.card-cta').style.height = `${maxHeights.button}px`;
                    }
                });
            }
        });
    }

    // Throttle resize event
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(equalizeHeightsWithinGroups, 150);
    });

    // Run the function on load
    window.addEventListener('load', equalizeHeightsWithinGroups);


//***EQUALIZE HEIGHTS END

//***JUMP LINKS START

    // Function to update specific jump links only if on the new domain
    function updateJumpLinks() {
        // Define the old domain and the new domain
        var oldDomain = "tarr-001.webflow.io";
        var newDomain = "www.tarro.com";

        // Check if the current domain is the new domain
        if (window.location.hostname === newDomain) {
            // Get all anchor tags
            var anchors = document.querySelectorAll('a');

            // Loop through each anchor tag
            anchors.forEach(function(anchor) {
                // Get the href attribute of the anchor tag
                var href = anchor.getAttribute('href');

                // Check if the href contains the old domain and a '#' character
                if (href && href.includes(oldDomain) && href.includes('#')) {
                    // Replace the old domain with the new domain
                    var updatedHref = href.replace(oldDomain, newDomain);
                    anchor.setAttribute('href', updatedHref);
                }
            });
        }
    }

    // Run the function to update jump links
    updateJumpLinks();

//***JUMP LINKS END

//***AUTO VIDEO START


 "use strict";

(() => {
  var a = "fs-attributes";
  var m = "autovideo";
  var E = "cmsattribute";

  var y = async (...o) => {
    var i;
    let e = [];
    for (let s of o) {
      let t = await ((i = window.fsAttributes[s]) == null ? void 0 : i.loading);
      e.push(t);
    }
    return e;
  };

  var l = () => {};

  function b(o, e, i, s) {
    return o ? (o.addEventListener(e, i, s), () => o.removeEventListener(e, i, s)) : l;
  }

  function x(o, e, i) {
    var t;
    let s = window.fsAttributes[o];
    return (s.destroy = i || l), (t = s.resolve) == null || t.call(s, e), e;
  }

  var g = `${a}-support`,
    B = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    R = async () => {
      let { fsAttributes: o, location: e } = window,
        { host: i, searchParams: s } = new URL(e.href);
      o.support || (o.support = {});
      let { support: t } = o;
      if (!i.includes("webflow.io") || !s.has(g)) return !1;
      if (t.import) return t.import;
      try {
        t.import = new Promise((r, n) => {
          let c = document.createElement("script");
          (c.src = B), (c.onload = () => r(!0)), (c.onerror = n), document.head.append(c);
        });
      } catch (r) {
        return !1;
      }
      return t.import;
    };

  var I = (o) => {
    let e = (s, t, r) => {
      let n = o[s],
        { key: c, values: A } = n,
        u;
      if (!t) return `[${c}]`;
      let d = A == null ? void 0 : A[t];
      typeof d == "string" ? (u = d) : (u = d(r && "instanceIndex" in r ? r.instanceIndex : void 0));
      let T = r && "caseInsensitive" in r && r.caseInsensitive ? "i" : "";
      if (!(r != null && r.operator)) return `[${c}="${u}"${T}]`;
      switch (r.operator) {
        case "prefixed":
          return `[${c}^="${u}"${T}]`;
        case "suffixed":
          return `[${c}$="${u}"${T}]`;
        case "contains":
          return `[${c}*="${u}"${T}]`;
      }
    };

    function i(s, t) {
      let r = e("element", s, t),
        n = (t == null ? void 0 : t.scope) || document;
      return t != null && t.all ? [...n.querySelectorAll(r)] : n.querySelector(r);
    }

    return [e, i];
  };

  var p = {
      preventLoad: { key: `${a}-preventload` },
      debugMode: { key: `${a}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${a}-dev` },
    },
    [f, z] = I(p);

  var _ = (o) => {
    let { currentScript: e } = document,
      i = {};
    if (!e) return { attributes: i, preventsLoad: !1 };
    let t = { preventsLoad: typeof e.getAttribute(p.preventLoad.key) == "string", attributes: i };
    for (let r in o) {
      let n = e.getAttribute(o[r]);
      t.attributes[r] = n;
    }
    return t;
  };

  var v = ({ scriptAttributes: o, attributeKey: e, version: i, init: s }) => {
      var c;
      V(), (c = window.fsAttributes)[e] || (c[e] = {});
      let { preventsLoad: t, attributes: r } = _(o),
        n = window.fsAttributes[e];
      (n.version = i), (n.init = s), t || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => s(r)));
    },
    V = () => {
      let o = h();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        S(window.fsAttributes, o);
        return;
      }
      let e = {
        cms: {},
        push(...i) {
          var s, t;
          for (let [r, n] of i) (t = (s = this[r]) == null ? void 0 : s.loading) == null || t.then(n);
        },
        destroy() {
          var i, s;
          for (let t of o) (s = (i = window.fsAttributes[t]) == null ? void 0 : i.destroy) == null || s.call(i);
        },
      };
      S(e, o), C(e), (window.fsAttributes = e), (window.FsAttributes = window.fsAttributes), R();
    },
    h = () => {
      let o = f("src", "finsweet", { operator: "contains" }),
        e = f("dev");
      return [...document.querySelectorAll(`script${o}, script${e}`)].reduce((t, r) => {
        var c;
        let n = r.getAttribute(p.dev.key) || ((c = r.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
        return n && !t.includes(n) && t.push(n), t;
      }, []);
    },
    S = (o, e) => {
      for (let i of e) {
        if (o[i]) continue;
        o[i] = {};
        let s = o[i];
        s.loading = new Promise((t) => {
          s.resolve = (r) => {
            t(r), delete s.resolve;
          };
        });
      }
    },
    C = (o) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      o.push(...e);
    };

  var w = "1.5.0";

  var U = async () => {
    await y(E);
    let o = document.querySelectorAll("video");

    if (!o.length) return;

    let e = new Map(),
      i = new IntersectionObserver(
        (t) => {
          for (let { target: r, isIntersecting: n } of t) {
            if (r instanceof HTMLVideoElement && !r.classList.contains("video-hero")) {
              n ? r.play() : r.pause();
              e.set(r, n);
            }
          }
        },
        {}
      );

    for (let t of o) {
      if (!t.classList.contains("video-hero")) {
        t.autoplay = !1;
        e.set(t, null);
        i.observe(t);
      }
    }

    let s = b(document, "visibilitychange", () => {
      for (let [t, r] of e) {
        document.hidden || !r ? t.pause() : t.play();
      }
    });

    return x(m, e, () => {
      i.disconnect(), s();
    });
  };

  v({ init: U, version: w, attributeKey: m });
})();

//***AUTO VIDEO END

//***INLINE VIDEO CONTROLS START

document.addEventListener('DOMContentLoaded', function() {
  const videoWrappers = document.querySelectorAll('.video-wrapper-inline');

  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('.iframe-inline');
    
    // Ensure the video is not a .video-hero before proceeding
    if (video.classList.contains('video-hero')) {
      return;
    }

    video.setAttribute('playsinline', ''); // Ensure the video plays inline on iPhone

    // Show controls on hover
    video.addEventListener('mouseenter', () => {
      video.setAttribute('controls', true);
    });

    // Hide controls when not hovering
    video.addEventListener('mouseleave', () => {
      video.removeAttribute('controls');
    });

    // Show controls on tap for mobile
    video.addEventListener('touchstart', (event) => {
      video.setAttribute('controls', true);
      event.stopPropagation(); // Prevents the document touchstart from immediately hiding the controls
    });
  });

  // Hide controls when the user touches anywhere outside the video
  document.addEventListener('touchstart', () => {
    const videos = document.querySelectorAll('.iframe-inline');
    
    videos.forEach(video => {
      // Ensure the video is not a .video-hero before removing controls
      if (!video.classList.contains('video-hero')) {
        video.removeAttribute('controls');
      }
    });
  });
});


//***INLINE VIDEO CONTROLS END

//***FORM PAGE ID START

$('#current-page').val(location.href);

//***FORM PAGE ID END


//***FORM ERROR MESSAGE START

  document.addEventListener('DOMContentLoaded', function() {
    // Select the specific dropdown field (change 'select[name="yourDropdownName"]' to match your field)
    var dropdown = document.querySelector('select[name="cuisine-type"]');

    // Add an event listener for form submission
    dropdown.form.addEventListener('submit', function(event) {
      if (!dropdown.value) { // Check if the dropdown has no value selected

        dropdown.setCustomValidity('Please fill out the required field: Cuisine Type');
      } else {
        dropdown.setCustomValidity(''); // Reset the custom message if valid
      }
    });
  });

//***FORM ERROR MESSAGE END




