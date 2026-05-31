import React from "react";

const SkincareExperts = () => {
  return (
    <section className="bg-[#fdf8f5] text-[#522e2e]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready for skincare and style that fit you?
          </h2>
          <p className="text-[#704c4c] max-w-2xl mx-auto mb-8">
            Start your journey to healthier, glowing skin with guidance tailored
            to your routine, goals, and sensitivities.
          </p>
          <a
            href="http://127.0.0.1:5000/skin/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#522e2e] text-[#fdf8f5] px-6 py-3 rounded-full hover:bg-[#3e1e1e] transition"
          >
            Talk to the chatbot
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkincareExperts;
