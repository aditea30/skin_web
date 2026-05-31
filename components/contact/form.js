"use client";
import React, { useState } from "react";
import Image from "next/image";

const form = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const endpoint = "/api/contact";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    setStatus("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      formEl?.reset();
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF9F6] p-4">
      <div className="flex flex-col md:flex-row items-center bg-[#522e2e] rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="md:w-1/3 p-4">
          <div className="relative w-full h-[300px]">
            <Image
              src="/photo/Clientsays/handshake.jpg" // Replace with actual image URL
              alt="Person with jewelry"
              fill
              className="rounded-lg object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            You may also fill out the form below and we will respond as quickly as
            possible.
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                className="w-full md:w-1/2 p-2 bg-white rounded-lg border-none focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full md:w-1/2 p-2 bg-white rounded-lg border-none focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="w-full md:w-1/2 p-2 bg-white rounded-lg border-none focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              className="w-full p-2 bg-white rounded-lg border-none focus:outline-none h-24 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-700 focus:outline-none disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm">Thanks! We received your message.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default form;
