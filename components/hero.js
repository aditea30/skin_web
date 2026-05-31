"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import facial from "../public/hero/facial.jpg";
import girl from "../public/hero/girl.jpg";
import skincare from "../public/hero/skincare.jpg";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".hero-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#522e2e] text-[#3B1E1E] py-16 px-6 md:px-12 lg:px-20">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex-1">
            <h1 className="hero-reveal text-4xl md:text-5xl font-semibold mb-4 text-white">
              Your Signature Skin & Style, Tailored Just For You 
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-white/85">
              Discover expert skincare routines perfectly matched to your unique concerns, and find your most flattering clothing colors based on your personal undertones. Start your personalized journey to glow and confidence today
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-tl-[200px] overflow-hidden h-[400px] sm:h-[500px] relative">
            <Image
              src={facial}
              alt="Facial treatment"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-t-[120px] rounded-br-[120px] overflow-hidden h-[400px] sm:h-[500px] relative">
            <Image
              src={girl}
              alt="Girl"
              fill
              className="object-cover"
            />
          </div>
          <div className="overflow-hidden h-[400px] sm:h-[500px] relative rounded-lg">
            <Image
              src={skincare}
              alt="Relaxed skin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
