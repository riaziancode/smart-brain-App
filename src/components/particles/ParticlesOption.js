const ParticlesOptions= {
    background: {
        color: {
            value: "linear-gradient(to right, rgb(232, 110, 208) 0%, rgb(119, 227, 237) 100%)",
        },
    },
    fpsLimit: 100,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            // onHover: {
            //     enable: true,
            //     mode: "repulse",
            // },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: .8,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 100,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: .5, max: 2.5 },
        },
    },
    detectRetina: true,
}

export default ParticlesOptions;