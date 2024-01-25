import React from "react";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesOptions from "./ParticlesOption.js";

const Particlebackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    return (container);
  }, []);

  return (
    <div>
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesOptions}
      />
    </div>
  );
};

export default Particlebackground;
