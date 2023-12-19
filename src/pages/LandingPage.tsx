import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const LandingPage = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const tl = gsap.timeline({ duration: 3, ease: "easy" });
      const allLinks = gsap.utils.toArray(".text-white h1");
      const lineOne = textRef.current.querySelector(".one");
      const lineTwo = textRef.current.querySelector(".two");

      gsap.set([lineOne], { xPercent: -101, autoAlpha: 0 });
      gsap.set(lineTwo, { xPercent: 101, autoAlpha: 0 });
      gsap.set(allLinks, { y: -50, autoAlpha: 0, scale: 1.5, rotationX: 45 });

      tl.to(lineOne, { xPercent: 0, autoAlpha: 1 })
        .to(lineTwo, { xPercent: 0, autoAlpha: 1 }, "-=.15")
        .to(allLinks, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.4,
          rotationX: 0,
        });
    }
  }, [textRef]);

  return (
    <div className="mx-auto w-full h-screen bg-zinc-950 p-12">
      <div className="flex justify-center items-center mt-24">
        <div ref={textRef} className="text-white text-[200px]">
          <h1 className="text one">Luxe</h1>
          <h1 className="text ml-72 two">Market</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
