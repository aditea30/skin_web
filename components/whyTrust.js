"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyTrustGlisten = () => {
  const sectionRef = useRef(null);
  const tiles = [
    {
      src: "/photo/whyTrust/essential.jpg",
      alt: "Essential routine",
    },
    {
      src: "/photo/whyTrust/tone.jpg",
      alt: "Tone matching",
    },
    {
      src: "/photo/whyTrust/skincare.jpg",
      alt: "Skincare focus",
    },  
    {
      src: "/photo/whyTrust/undertone.jpg",
      alt: "Undertone match",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".trust-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".trust-reveal",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
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
    <section className="bg-[#fdf8f5] py-16 px-4">
      <div ref={sectionRef} className="max-w-6xl mx-auto text-center">
        <p className="trust-reveal text-sm uppercase tracking-[0.2em] text-[#7a5a5a] mb-3">
          Discover yourself
        </p>
        <h2 className="trust-reveal text-3xl md:text-4xl font-semibold text-[#512d2d] mb-4">
          Discover yourself by talking to our chatbot
        </h2>
        <p className="trust-reveal text-[#6b4a4a] max-w-2xl mx-auto mb-10">
          Share your skin type and body shape, and we will guide you to colors
          and outfits that feel effortless and balanced.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {tiles.map((tile) => (
            <div
              key={tile.src}
              className="relative h-40 md:h-48 rounded-xl overflow-hidden border border-[#ecdede] bg-[#f7efec]"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Start a style chat", "Talk to the chatbot", "Find my colors"].map(
            (label) =>
              label === "Talk to the chatbot" ? (
                <a
                  key={label}
                  href="http://127.0.0.1:5000/skin/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#512d2d] text-[#512d2d] px-6 py-2 rounded-full text-sm transition hover:bg-[#512d2d] hover:text-white"
                >
                  {label}
                </a>
              ) : (
                <button
                  key={label}
                  className="border border-[#512d2d] text-[#512d2d] px-6 py-2 rounded-full text-sm transition hover:bg-[#512d2d] hover:text-white"
                  type="button"
                >
                  {label}
                </button>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustGlisten;
