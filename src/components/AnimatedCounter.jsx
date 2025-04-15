import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  const [counterStarted, setCounterStarted] = useState(false);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
        // Create a single ScrollTrigger
    });
}, counterRef);
ScrollTrigger.create({
    trigger: "#counter",
    start: "top bottom-=100", // Starts when top of counter is 100px before bottom of viewport
    onEnter: () => setCounterStarted(true),
    markers: false // Set to true for debugging
  });
  ScrollTrigger.refresh();
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 mr-2.5">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
            {counterStarted ? (
                <CountUp 
                  start={0}
                  end={item.value} 
                 suffix={item.suffix}
                  duration={3.5} 
                />
              ) : (
                `0${item.suffix}`
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;