const target = document.querySelector(".work");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);

//Navbar scroll to spots
const choices = document.querySelectorAll(".nav-choices")
const spot = ["h2", "h3", "h4"];
choices.forEach(function (item, index) {
  const elmnt = document.querySelector(spot[index]);
  item.addEventListener('click', function () {
    elmnt.scrollIntoView({
      block: "start"
    });
  });
});

window.onscroll = function () {
  AOS.init();
}

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