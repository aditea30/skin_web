"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ConsultationCTA = () => {
  const sectionRef = useRef(null);
  const handleChatbotClick = () => {
    window.open(
      "http://127.0.0.1:5000/skin/chat",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".consult-reveal", { opacity: 0, y: 18 });
      gsap.fromTo(
        ".consult-reveal",
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
    <section ref={sectionRef} className="flex flex-col md:flex-row bg-[#fef6f2]">
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full relative min-h-[260px]">
        <Image
          src="/photo/consultation/hand.jpg" // Replace with actual path
          alt="Skincare hands"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start p-8 md:p-20 relative bg-[#fef6f2] rounded-tl-[150px]">
        <h2 className="consult-reveal text-4xl text-[#522e2e] font-semibold mb-6 leading-snug">
          Let’s Begin Your Skincare Journey
        </h2>
        <p className="consult-reveal text-[#522e2e] mb-8">
          Ready to achieve radiant, healthy skin? Let us help you get started today.
        </p>
        <a
          href="http://127.0.0.1:5000/skin/chat"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleChatbotClick}
          className="consult-reveal bg-[#522e2e] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#3e1e1e] transition z-10"
        >
          <span role="img" aria-label="chat">💬</span> Talk to the chatbot
        </a>

        {/* Optional Decorative Face Illustration - if applicable */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none hidden md:block">
          <Image
            src="/images/face-line-art.png"
            alt="decorative face"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
