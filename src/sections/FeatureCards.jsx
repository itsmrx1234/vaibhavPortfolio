// src/sections/FeatureCards.jsx
import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {abilities.map((item, idx) => (
          <article
            key={idx}
            className="rounded-2xl bg-black/50 border border-white/10 p-6 backdrop-blur-sm"
          >
            {item.imgPath ? (
              <img
                src={item.imgPath}
                alt={item.title}
                className="h-10 w-10 mb-4 object-contain"
                loading="lazy"
              />
            ) : null}

            <h3 className="text-lg font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
