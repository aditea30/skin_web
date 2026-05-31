"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RadiantJourneySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".journey-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".journey-reveal",
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
    <section className="bg-[#522e2e] py-16 px-4 md:px-10">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] items-center"
      >
        <div className="relative h-[260px] md:h-[360px]">
          <Image
            src="/photo/journey/journ.jpg"
            alt="Skincare product set"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="bg-[#f6e7cc] text-[#3b2a1f] rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <p className="journey-reveal text-sm uppercase tracking-[0.18em] text-[#8a6b2a] mb-3">
            Bestseller among women 40+
          </p>
          <h2 className="journey-reveal text-3xl md:text-4xl font-semibold mb-4">
            Chatbot-guided skincare
            <br />
            that fits your skin
          </h2>
          <p className="journey-reveal text-[#5a4332] mb-8">
            Tell us your concerns and routine habits. Our chatbot builds a
            simple plan with the right product types and actives for your skin.
          </p>
          <a
            href="http://127.0.0.1:5000/skin/quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="journey-reveal bg-[#1a1412] text-white px-8 py-3 rounded-full text-sm tracking-[0.2em]"
          >
            Take a Quiz 
          </a>
        </div>
      </div>
    </section>
  );
};

export default RadiantJourneySection;
