import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-[#4e2b2b] py-20 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
        <div className="text-[#f3e7e7]">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f6c7a6] mb-4">
            You're in good hands
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            You're in good hands
          </h2>
          <p className="text-[#f3e7e7] max-w-xl leading-relaxed">
            Come try it for yourself and see the difference. Our chatbot helps
            you find what truly works for your skin and style, with guidance
            you can feel right away.
          </p>
        </div>

        <div className="relative h-[260px] md:h-[360px] rounded-[32px] overflow-hidden bg-[#5a3333] border border-[#6a3d3d]">
          <Image
            src="/photo/Clientsays/handshake.jpg"
            alt="Client consultation"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
