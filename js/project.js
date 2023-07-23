//  Parallax scroll
var rellax = new Rellax(".rellax");

// scroll event
let observer = new IntersectionObserver((e) => {
  e.forEach((news) => {
    if (news.isIntersecting) {
      news.target.style.opacity = 1;
    } else {
      news.target.style.opacity = 0;
    }
  });
});

let news = document.querySelectorAll(".rellax");
observer.observe(news[0]);
observer.observe(news[1]);
observer.observe(news[2]);
observer.observe(news[3]);
observer.observe(news[4]);

let observer1 = new IntersectionObserver((e) => {
  e.forEach((news) => {
    if (news.isIntersecting) {
      news.target.style.opacity = 1;
    } else {
      news.target.style.opacity = 0;
    }
  });
});

let overviewTxt = document.querySelectorAll(".overview_p");
for (let i = 0; i < overviewTxt.length; i++) {
  observer1.observe(overviewTxt[i]);
}

let guide = new IntersectionObserver((e) => {
  e.forEach((dGuide) => {
    if (dGuide.isIntersecting) {
      dGuide.target.style.opacity = 1;
    } else {
      dGuide.target.style.opacity = 0;
    }
  });
});

let guidePart = document.querySelectorAll(".guide");
for (let i = 0; i < guidePart.length; i++) {
  guide.observe(guidePart[i]);
}

let observerimg = new IntersectionObserver((e) => {
  e.forEach((ui) => {
    if (ui.isIntersecting) {
      ui.target.style.opacity = 1;
    } else {
      ui.target.style.opacity = 0;
    }
  });
});

let uiImg = document.querySelectorAll(".ui_wrap li img");
for (let i = 0; i < uiImg.length; i++) {
  observerimg.observe(uiImg[i]);
}

let observer4 = new IntersectionObserver((e) => {
  e.forEach((contactInfo) => {
    if (contactInfo.isIntersecting) {
      contactInfo.target.style.opacity = 1;
    } else {
      contactInfo.target.style.opacity = 0;
    }
  });
});
let contactBox = document.querySelectorAll(".contact_info");
observer4.observe(contactBox[0]);
