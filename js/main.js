$(function () {
  $("#main .main_contents .icons .left li:nth-child(1)").click(function () {
    $(this).toggleClass("on");
  });

  // #main - typing text
  const content1 = "Hello Designfever!";
  const content = "WELCOME TO \n MY PORTFOLIO.";
  const text = document.querySelector(".text2");
  let i = 0;
  let timer;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i >= content.length) {
      clearInterval(timer);
    }
  }

  timer = setInterval(typing, 100);

  // #works - Parallax scroll
  var rellax = new Rellax(".rellax");

  // scroll Event ================================================
  let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
      if (box.isIntersecting) {
        box.target.style.opacity = 1;
      } else {
        box.target.style.opacity = 0;
      }
    });
  });
  let project = document.querySelectorAll(".project");
  observer.observe(project[0]);
  observer.observe(project[1]);
  observer.observe(project[2]);
  // observer.observe(project[3]);

  let observer2 = new IntersectionObserver((e) => {
    e.forEach((txt) => {
      if (txt.isIntersecting) {
        txt.target.style.opacity = 1;
      } else {
        txt.target.style.opacity = 0;
      }
    });
  });

  let txtBox = document.querySelectorAll(".txt_box");
  observer2.observe(txtBox[0]);
  observer2.observe(txtBox[1]);
  observer2.observe(txtBox[2]);
  // observer2.observe(txtBox[3]);

  let observer3 = new IntersectionObserver((e) => {
    e.forEach((info) => {
      if (info.isIntersecting) {
        info.target.style.opacity = 1;
        info.target.style.marginLeft = "0px";
      } else {
        info.target.style.opacity = 0;
        info.target.style.marginLeft = "-80px";
      }
    });
  });

  let aboutInfo = document.querySelectorAll(".about_info");
  observer3.observe(aboutInfo[0]);

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

  // #main scroll Event =================================================
  window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var innerElement = document.querySelector("#main .inner");

    if (scrollPosition <= 500) {
      var scale = 1 - scrollPosition / 1000;
      var opacity = 1 - scrollPosition / 500;
      innerElement.style.transform =
        "translate(-50%, -50%) scale(" + scale + ")";
      innerElement.style.opacity = opacity;
    } else {
      innerElement.style.transform = "translate(-50%, -50%) scale(0.5)";
      innerElement.style.opacity = 0.3;
    }
  });
});
