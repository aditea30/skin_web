"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/footer/logo.png";

const Footer = () => {
  const pathname = usePathname();
  const chatbotHref =
    pathname === "/body"
      ? "http://127.0.0.1:5000/body/chat"
      : "http://127.0.0.1:5000/skin/chat";

  return (
    <footer className="bg-[#522e2e] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src={logo} width={120} height={46} alt="Glisten logo" />
            <p className="text-sm text-white/80 max-w-sm">
              Personalized skincare and style recommendations powered by our
              chatbot.
            </p>
          </div>
          <a
            href={chatbotHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#522e2e] px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition"
          >
            Talk to the chatbot
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-sm text-white/80">
          <div>
            <h3 className="text-white text-base font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold mb-3">Chatbot</h3>
            <ul className="space-y-2">
              <li>Skin analysis</li>
              <li>Routine builder</li>
              <li>Style matching</li>
              <li>Color pairing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>(123) 456-7890</li>
              <li>hello@glisten.com</li>
              <li>Wellness City, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>(c) 2026 Glisten. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
