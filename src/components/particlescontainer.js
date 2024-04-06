import React, { useEffect } from "react";

const ParticlesContainer = () => {
  useEffect(() => {
    const loadParticles = () => {
      const script = document.createElement("script");
      script.src = "/particles.min.js";
      script.async = true;
      script.onload = () => {
        window.particlesJS.load(
          "particles-container",
          "particles.json",
          function () {
            console.log("particles.js loaded");
          }
        );
      };
      document.body.appendChild(script);
    };

    loadParticles();
  }, []);

  return <section id="particles-container"/>;
};

export default ParticlesContainer;
