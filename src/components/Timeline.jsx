"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Education & Achievements</h2>
      <div ref={ref} className="relative pb-8 mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-12 md:gap-10"
          >
            <div className="sticky z-10 flex flex-col items-center self-start max-w-xs md:flex-row top-24 sm:top-28 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center size-8 sm:size-10 rounded-full -left-[11px] sm:-left-[15px] bg-midnight border border-white/10">
                <div className="size-3 sm:size-4 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-1.5 font-bold md:flex md:pl-20 text-neutral-300">
                <h3 className="text-xl md:text-2xl text-white tracking-tight">{item.date}</h3>
                <h3 className="text-lg md:text-xl font-semibold text-neutral-300 leading-snug">{item.title}</h3>
                {item.job && <h3 className="text-base font-normal text-neutral-400">{item.job}</h3>}
              </div>
            </div>

            <div className="relative w-full pl-8 sm:pl-16 pr-2 sm:pr-4 md:pl-4">
              <div className="block mb-3 text-left md:hidden">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-aqua uppercase">{item.date}</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">{item.title}</h3>
                {item.job && <p className="text-xs sm:text-sm font-normal text-neutral-400 mt-0.5">{item.job}</p>}
              </div>
              {item.contents.map((content, idx) => (
                <p className="mb-2.5 text-xs sm:text-base md:text-lg font-normal text-neutral-300 leading-relaxed" key={idx}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
