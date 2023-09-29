function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

const timeCont = document.querySelector("#time");

const setTime = () => {
  setInterval(() => {
    timeCont.textContent = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }, 1000);
};

setTime();

// let words = ["websites", "shopify", "designs", "Visual identities"];

let dynamic = document.querySelector("#dynamic");
setTimeout(() => {
  dynamic.textContent = "Frontend Developer";
}, 500);

setTimeout(() => {
  dynamic.textContent = "Student";
}, 1000);

setTimeout(() => {
  dynamic.textContent = "Sneaker Head";
}, 1500);

setTimeout(() => {
  dynamic.textContent = "Gym Rat";
}, 2000);
let coverTimeline = gsap.timeline();

coverTimeline
  .from("#cover", {
    opacity: 0,
    y: "0%",
  })
  .to("#cover", {
    opacity: 1,
    y: "100%",
    duration: 2,
    ease: "Power4.easeOut",
    delay: 2,
  })
  .from("#cardWrapper", {
    opacity: 0,
  })
  .to("#cardWrapper", {
    opacity: 1,
  });

let mainTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 5%",
    end: "top -50%",
    scrub: 3,
  },
});

mainTl.to("#videoWrapper", {
  top: "10%",
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4>h1",
    scroller: "#main",
    start: "top 55%",
    end: "top 5%",
    scrub: 1,
  },
});

tl2.to("#main", {
  backgroundColor: "#ff3c00",
  color: "whitesmoke",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5>#contactWrapper>#contact>p",
    scroller: "#main",
    start: "top 95%",
    end: "top 55%",
    scrub: 1,
  },
});

tl3.to("#main", {
  backgroundColor: "#1a1a1a",
  color: "whitesmoke",
});

//work html
