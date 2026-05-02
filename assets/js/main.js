window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = "You are submitted successfully";
    document.getElementById("status").style.color = "green";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    document.getElementById("status").style.color = "red";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// /*SCROLL HOME*/
// sr.reveal(".home__title", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".home__img", { delay: 400 });
// sr.reveal(".home__social-icon", { interval: 200 });

// /*SCROLL ABOUT*/
// sr.reveal(".about__img", {});
// sr.reveal(".about__subtitle", { delay: 400 });
// sr.reveal(".about__text", { delay: 400 });

// /*SCROLL SKILLS*/
// sr.reveal(".skills__subtitle", {});
// sr.reveal(".skills__text", {});
// sr.reveal(".skills__data", { interval: 200 });
// sr.reveal(".skills__img", { delay: 600 });

// /*SCROLL WORK*/
// sr.reveal(".work__img", { interval: 200 });

// /*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 200 });

////////////////////////////////////////
//// Lazy loading images /////////

// const imgTargets = document.querySelectorAll("img[data-src]");

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   //if (!entry.IsIntersecting) return;
//   //replace the src to data-src

//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });

//   //observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0.5,
// });

// imgTargets.forEach((img) => imgObserver.observe(img));

// const contactForm = document.querySelector("img[data-src]");

// if (contactForm) {
//   const contactObserver = new IntersectionObserver(
//     (entries, obs) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) return;
//         console.log(entry.target);
//         // entry.target.src = entry.target.dataset.src;
//         //entry.target.classList.remove("lazy-img");
//         alert("dsagdsa");
//       });
//     },
//     { root: null, threshold: 0.5 }
//   );
//   contactObserver.observe(contactForm);
// }

/////////IntersectionObserver////////////////////

const mycallback = function (entries, obs) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    console.log(entry.target);
    alert("Form is visible");
    entry.target.classList.remove("lazy-img");
  }
};
const contactForm = document.querySelector(".contact__form");

const practice = new IntersectionObserver(mycallback, {
  root: null,
  threshold: 1,
});

practice.observe(contactForm);

//////////////////Menu Fade Animation /////////////////////////////

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelectorAll(".nav__logo");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// const handleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// //Passing "argument" into handler
// // nav.addEventListener('mouseover', function (e) {
// //   handleHover(e, 0.5);
// // });

// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));
