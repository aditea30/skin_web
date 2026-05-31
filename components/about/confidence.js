"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ConfidenceSection = () => {
  const sectionRef = useRef(null);
  const images = [
    { src: "/photo/confidence/skin.jpg", alt: "Skincare routine" },
    { src: "/photo/confidence/glow.jpg", alt: "Glow results" },
    { src: "/photo/confidence/healthy.jpg", alt: "Healthy skin" },
    { src: "/photo/confidence/routine.jpg", alt: "Balanced routine" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".confidence-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".confidence-reveal",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#522e2e] py-16 px-6 md:px-20">
      <div ref={sectionRef} className="max-w-6xl mx-auto text-center text-[#f3e7e7]">
        <p className="confidence-reveal text-sm uppercase tracking-[0.2em] text-[#f6c7a6] mb-3">
          Chatbot skincare
        </p>
        <h2 className="confidence-reveal text-3xl md:text-4xl font-semibold text-white mb-4">
          Skincare recommendations that actually fit your skin
        </h2>
        <p className="confidence-reveal text-[#f3e7e7] max-w-2xl mx-auto mb-10">
          Our chatbot learns your concerns, sensitivity, and routine habits to
          suggest product types and actives that are realistic and easy to
          follow. The result is a clearer, calmer routine built just for you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((item) => (
            <div
              key={item.src}
              className="relative h-40 md:h-48 rounded-2xl overflow-hidden border border-[#6a3d3d] bg-[#5a3333]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
