"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkincarePhilosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".philo-reveal", { opacity: 0, y: 20 });
      gsap.fromTo(
        ".philo-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
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
    <section className="bg-[#fefaf7] py-16 px-4">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center"
      >
        <div className="text-[#512d2d]">
          <p className="philo-reveal text-sm uppercase tracking-[0.2em] text-[#7a5a5a] mb-3">
            Chatbot philosophy
          </p>
          <h2 className="philo-reveal text-3xl md:text-4xl font-semibold mb-4">
            A calm, tailored routine in minutes
          </h2>
          <p className="philo-reveal text-[#6b4a4a] mb-6">
            Our chatbot listens to your skin concerns, analyzes patterns from
            your answers, and recommends a simple routine with product types
            that fit your goals, budget, and sensitivity level.
          </p>

          <div className="space-y-3 text-sm">
            <div className="philo-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#caa6a6]" />
              <p>Tell us what you see: texture, tone, acne, or dryness.</p>
            </div>
            <div className="philo-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#caa6a6]" />
              <p>We map your concerns to a routine structure and actives.</p>
            </div>
            <div className="philo-reveal flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#caa6a6]" />
              <p>You get a clean, minimal plan you can follow daily.</p>
            </div>
          </div>
        </div>

        <div className="relative h-[280px] md:h-[340px] rounded-xl overflow-hidden border border-[#ecdede] bg-[#f7efec]">
          <Image
            src="/photo/philosphy/philosphy.jpg"
            alt="Chatbot skincare recommendations"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SkincarePhilosophy;
