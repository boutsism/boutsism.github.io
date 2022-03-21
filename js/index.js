document.addEventListener("scroll", initGTMOnEvent);
document.addEventListener("mousemove", initGTMOnEvent);
document.addEventListener("touchstart", initGTMOnEvent);
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initGTM, 2000);
});
function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
}
function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }
  window.gtmDidInit = true;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-BQES39LV2S");
  };
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-BQES39LV2S";
  script.defer = true;
  document.getElementsByTagName("body")[0].appendChild(script);
}
const target = document.querySelector("footer");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;
function callback(entries, observer) {
  entries.forEach((entry) => {
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
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);
const choices = document.querySelectorAll(".nav-choices");
const spot = ["h2", "h3", "h4", "h2", "h3", "h4"];
choices.forEach(function (item, index) {
  const elmnt = document.querySelector(spot[index]);
  item.addEventListener("click", () => {
    elmnt.scrollIntoView({
      block: "start",
    });
  });
});
window.onscroll = function () {
  AOS.init();
};

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
