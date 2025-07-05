import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const timeline = gsap.timeline();
// timeline.from(".gfade", {
//   scrollTrigger: {
//     trigger: ".gfade",
//     start: "top 50%",
//     markers: true,
//   },
//   y: 70,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.1,
// });


gsap.utils.toArray(".gfade").forEach((el, i) => {
  gsap.from(el, {
    y: 70,
    opacity: 0,
    duration: 1,
    delay: i * 0.05, // stagger effect
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // triggers when each .gfade enters viewport
      // markers: true,
    }
  });
});

gsap.from(".zoomimg", {
  opacity: 0,
  scale: 0.7,
  duration: 1,
  ease: "power1",
  scrollTrigger: {
    trigger: ".zoomimg",
    start: "top 80%", 
  }
})