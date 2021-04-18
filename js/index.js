/*document.addEventListener("wheel", scrolling);
function scrolling(e) {
    if (e.deltaY < 0) {
        document.documentElement.scrollTo({
            top: 0,
        });
    }
    else if (e.deltaY > 0) {
        document.documentElement.scrollTo({
            top: 550,
          });
    }
}*/

function about() {
  const heading2 = document.querySelector("h2")
  heading2.scrollIntoView({
    behavior: 'smooth', // smooth scroll
    block: 'center' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  })
}

function projects() {
  const heading3 = document.querySelector(".section3")
  heading3.scrollIntoView({
    behavior: 'smooth', // smooth scroll
    block: 'center' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  })
}

function contact() {
  const heading4 = document.querySelector("h4")
  heading4.scrollIntoView({
    behavior: 'smooth', // smooth scroll
    block: 'center' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  })
}

document.addEventListener("DOMContentLoaded", function() { 
  const myNav = document.querySelector('.navbar-light');
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 1000) {
      myNav.classList.add("nav-scrolled");
      myNav.classList.remove("nav-scrolled1");
    }
    else if (document.documentElement.scrollTop > 500) {
      myNav.classList.add("nav-scrolled1");
      myNav.classList.remove("nav-scrolled");

    }
    else if (document.documentElement.scrollTop > 50) {
      myNav.classList.add("nav-scrolled");
      myNav.classList.remove("nav-scrolled1");
    }
    else {
      myNav.classList.remove("nav-scrolled1");
      myNav.classList.remove("nav-scrolled");
    }
    AOS.init();
  }
});

/*const cookieBox = document.querySelector(".cookiebar"),
  acceptBtn = cookieBox.querySelector(".btn");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=boutsism; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.style.display = "none"
  } else {
    alert(
      "Δεν είναι δυνατή η ρύθμιση του cookie! Παρακαλώ καταργήστε τον αποκλεισμό αυτού του ιστότοπου από τη ρύθμιση cookie του προγράμματος περιήγησής σας."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=boutsism");
checkCookie != -1
  ? cookieBox.style.display = "none"
  : cookieBox.style.display = "block";*/