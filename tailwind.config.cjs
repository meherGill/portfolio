/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                cursorblink: {
                    "0%": { opacity: 0 },
                    "50%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                apparate: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                chaotic: {
                    "0%": { transform: "translate(-500px, -500px)" },
                    "20%": { transform: "translate(400px, -400px)" },
                    "40%": { transform: "translate(-350px , -300px)" },
                    "60%": { transform: "translate(-150px, 200px)" },
                    "70%": { transform: "translate(150px, 150px)" },
                    "80%": { transform: "translate(-100px, 100px)" },
                    "100%": { transform: "translate(0, 0)" },
                },

                slideFromLeft: {
                    from: {
                        transform: "translateX(-2000px)",
                    },

                    to: {
                        transform: "translateX(0px)",
                    },
                },
            },
            animation: {
                cursorblink: "cursorblink 0.5s infinite",
                apparate: "apparate 1s",
                chaotic: "chaotic 2.2s",
                slideFromLeft: "slideFromLeft 1.5s",
            },
        },
    },
    daisyui: {
        themes: ["garden", "night"],
        fontFamily: {
            pressstart: ["Press Start 2P"],
        },
    },
    plugins: [require("daisyui")],
};
