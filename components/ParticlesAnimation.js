import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/Link";

const options3 = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
const options2 = {
  fpsLimit: 60,
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  background: {
    color: {
      value: "#27272a",
    },
  },
  particles: {
    color: {
      value: "#2dd4bf",
    },
    lineLinked: {
      enable: true,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: 1,
    },

    move: {
      size: true,
      enable: true,
      speed: 0.25,
      direction: "center",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: true,
        rotate: { x: 60, y: 120 },
      },
      trail: {
        enable: false,
        length: 100,
      },
      warp: true,
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "push",
        },
      },
    },
  },
};

export default function ParticlesAnimation() {
  return (
    <div className="mx-auto py-10 rounded-lg">
      <Particles
        id="tsparticles"
        options={options3}
        init={loadFull}
        style={{
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      />
    </div>
  );
}