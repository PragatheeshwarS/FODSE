// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   blur.style.left = dets.x - 250 + "px";
//   blur.style.top = dets.y - 250 + "px";
// });

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #01ffdd";
    crsr.style.backgroundColor = "#01ffdd;";
  });
});

gsap.to("#nav", {
  backgroundColor: "#001F2B",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#001F2B",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

function downloadPDF() {
  var pdfUrl = "AssestsProblemStatements.pdf";

  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "downloaded.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

document
  .getElementById("downloadButton")
  .addEventListener("click", downloadPDF);

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const cursor = document.getElementById("cursor");

const colors = [
  "#004196",
  "#1353b4",
  "#0d5789",
  "#001327",
  "#002948",
  "#092A4D",
  "#00316D",
  "#001327",
  "#002967",
  "#009BD6",
  "#00B8FF",
  "#464984",
  "#393C71",
  "#00316D",
  "#001327",
  "#0f6695",
  "#0a4666",
  "#4b7890",
  "#1d9fe6",
  "#0d3eb0",
  "#9bc4da",
  "#002a41",
];

let isCursorMoving = false;
let cursorTimeout;

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  // Cursor is moving, show circles
  if (!isCursorMoving) {
    isCursorMoving = true;
    // cursor.style.display = "block";
    circles.forEach(function (circle) {
      circle.style.display = "block";
    });
  }

  // Clear any existing timeout
  clearTimeout(cursorTimeout);

  // Set a timeout to hide circles after 0 second of inactivity
  cursorTimeout = setTimeout(() => {
    isCursorMoving = false;
    // cursor.style.display = "none";
    circles.forEach(function (circle) {
      circle.style.display = "none";
    });
  }, 100);
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "04/05/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
})();



document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navDiv = document.querySelector('.nav-div');

  // Toggle navigation menu when hamburger icon is clicked
  navToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navDiv.style.display = expanded ? 'none' : 'block';
  });

  // Close navigation menu when clicking outside of it or on the toggle button
  document.body.addEventListener('click', function (event) {
    if (!navDiv.contains(event.target) && !navToggle.contains(event.target)) {
      closeNavMenu();
    }
  });

  // Close navigation menu when clicking on anchor links inside the menu
  navDiv.addEventListener('click', function (event) {
    if (event.target.tagName === 'a') {
      closeNavMenu();
    }
  });

  // Function to close the navigation menu
  function closeNavMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    navDiv.style.display = 'none';
  }
});

