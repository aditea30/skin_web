"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const concerns = [
  { label: "Signs of aging", img: "/photo/experts/antiaging.jpg" },
  { label: "Uneven tone", img: "/photo/experts/uneven.jpg" },
  { label: "Pigmentation", img: "/photo/experts/pigmentation.jpg" },
  { label: "Dry skin", img: "/photo/experts/dryskin.jpg" },
  { label: "Acne", img: "/photo/experts/acne.jpg" },
  { label: "Redness", img: "/photo/experts/redness.jpg" },
];

const ExpertTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".experts-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".experts-reveal",
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
    <section className="bg-[#fef6f2] py-16 px-6 md:px-12">
      <div ref={sectionRef} className="max-w-6xl mx-auto text-center text-[#551d1c]">
        <h2 className="experts-reveal text-4xl md:text-5xl font-semibold mb-4">
          Discover Treatments
        </h2>
        <p className="experts-reveal text-[#551d1c]/80 max-w-2xl mx-auto mb-12">
          Not sure where to begin? Here are some common skin concerns.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {concerns.map((item) => (
          <div key={item.label} className="text-left">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#f9ede7] border border-[#ead7d0]">
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 16vw, 50vw"
              />
            </div>
            <p className="mt-3 text-sm text-[#551d1c]">{item.label} -&gt;</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeam;
