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
            },
            animation: {
                cursorblink: "cursorblink 0.5s infinite",
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
