import { useLocation } from 'react-router-dom';

// Animated Background
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); 
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);
  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{ background: { }, fpsLimit: 120, interactivity: { events: { onClick: { enable: true, mode: "push", }, onHover: { enable: true, mode: "repulse", }, resize: true, }, modes: { push: { quantity: 4, }, repulse: { distance: 150, duration: 0.4, }, }, }, particles: { color: { value: "#343a40", }, links: { color: "#343a40", distance: 150, enable: true, opacity: 0.5, width: 1, }, collisions: { enable: true, }, move: { direction: "none", enable: true, outModes: { default: "bounce", }, random: false, speed: 1, straight: false, }, number: { density: { enable: true, area: 800, }, value: 40, }, opacity: { value: 0.5, }, shape: { type: "circle", }, size: { value: { min: 1, max: 5 }, }, }, detectRetina: true, }} />
  );
}

export default ParticlesBackground;