function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main1"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main1", {
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
    pinType: document.querySelector("#main1").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

let workTl = gsap.timeline();

workTl
  .from("#w-page1", {
    opacity: 0,
    y: "-100%",
  })
  .to("#w-page1", {
    opacity: 1,
    y: "0%",
    duration: 2,
    ease: "Power4.easeOut",
    // delay: 2,
  });

let stTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#w-page3>h1",
    scroller: "#main1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
    // markers: true,
  },
});

stTl.to("#w-page3", {
  backgroundColor: "#f4f0e6",
  color: "#5a7f43",
});

let newTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#w-page3>p",
    scroller: "#main1",
    start: "top 40%",
    end: "top 5%",
    scrub: 1,
  },
});

newTl
  .to("#one", {
    scale: 1.05,
    duration: 2,
  })
  .to("#two", {
    scale: 1.05,
    duration: 2,
  })
  .to("#three", {
    scale: 1.05,
    duration: 2,
  })
  .to("#four", {
    scale: 1.05,
    duration: 2,
  });

let projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#w-page4",
    scroller: "#main1",
    start: "top 40%",
    end: "top 5%",
    scrub: 1,
  },
});

projectTl
  .from("#card", {
    y: 100,
    duration: 2,
  })
  .to("#card", {
    y: 0,
    duration: 2,
  });
