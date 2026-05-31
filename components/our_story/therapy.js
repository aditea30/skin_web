import React from "react";
import Image from "next/image";

const toneGuides = [
  {
    title: "Fair Skin",
    colours: "Soft rose, powder blue, lavender, mint, and pearl white.",
    image: "/photo/therapy/colour.jpg",
  },
  {
    title: "Light Skin",
    colours: "Peach, coral, warm beige, sage green, and champagne.",
    image: "/photo/therapy/light.jpg",
  },
  {
    title: "Medium Skin",
    colours: "Terracotta, olive, teal, berry, and warm gold.",
    image: "/photo/therapy/medium.jpg",
  },
  {
    title: "Tan Skin",
    colours: "Rust, emerald, mustard, copper, and deep rose.",
    image: "/photo/therapy/tan.jpg",
  },
  {
    title: "Deep Skin",
    colours: "Cobalt, plum, ivory, fuchsia, bronze, and rich jewel tones.",
    image: "/photo/therapy/deep.jpg",
    
  },
];

const HydrationTherapySection = () => {
  return (
    <section className="bg-[#fef6f2] py-16 px-6 md:px-24 text-[#551d1c] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl animate-copy-rise">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f1673a]">
              Skin tone guide
            </p>
            <h2 className="mb-4 text-4xl font-semibold md:mb-0 md:text-5xl">
              Skin-Tone Complementing Colours
            </h2>
            <p className="mt-4 text-base leading-7 text-[#7a4037] md:text-lg">
              Discover colour families that naturally brighten, balance, and
              flatter different complexions, from soft pastels for fair tones to
              rich jewel shades for deeper skin tones.
            </p>
          </div>

          <a
            href="http://127.0.0.1:5000/body/quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-copy-rise inline-flex w-fit items-center justify-center self-start rounded-full bg-[#522e2e] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-[#6a3b3b] md:self-center"
          >
            Take a quiz
          </a>
        </div>

        <div className="mt-12 grid grid-flow-col auto-cols-[78%] gap-5 overflow-x-auto pb-4 sm:auto-cols-[45%] lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
          {toneGuides.map((guide, index) => (
            <article
              key={guide.title}
              className="group animate-card-rise rounded-[8px] bg-white/80 shadow-sm ring-1 ring-[#f4d9cc] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-[8px]">
                <Image
                  src={guide.image}
                  alt={`${guide.title} colour inspiration`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 78vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7a4037]">
                  {guide.colours}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .animate-copy-rise {
          animation: copyRise 800ms ease-out both;
        }

        .animate-card-rise {
          animation: cardRise 700ms ease-out both;
        }

        @keyframes copyRise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardRise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HydrationTherapySection;
