"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SignatureTreatments = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".style-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".style-reveal",
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
    <section className="bg-[#4e2b2b] py-16 px-4">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center"
      >
        <div className="relative h-[280px] md:h-[340px] rounded-xl overflow-hidden border border-[#6a3d3d] bg-[#5a3333]">
          <Image
            src="/photo/treatment/treatment.jpg"
            alt="Style chatbot recommendations"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="text-[#f3e7e7]">
          <p className="style-reveal text-sm uppercase tracking-[0.2em] text-[#f6c7a6] mb-3">
            Style guidance
          </p>
          <h2 className="style-reveal text-3xl md:text-4xl font-semibold mb-4 text-white">
            Outfits that flatter your skin tone and shape
          </h2>
          <p className="style-reveal text-[#f3e7e7] mb-6">
            Our chatbot blends your skin type, body shape, and undertone to
            suggest outfit silhouettes and color pairings that feel confident
            and cohesive.
          </p>

          <div className="space-y-3 text-sm">
            <div className="style-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#f6c7a6]" />
              <p>Share your skin concerns and how your body is structured.</p>
            </div>
            <div className="style-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#f6c7a6]" />
              <p>We map your undertone to a color family that complements.</p>
            </div>
            <div className="style-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#f6c7a6]" />
              <p>You get outfit ideas with balanced, wearable palettes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignatureTreatments;
