/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#591bc5",
                textColor: "rgba(0, 0, 0, .87)",
                textSecond: "#4d4b74",
            },
            boxShadow: {
                custom: "-3px 14px 45px -20px rgba(0,0,0,0.75)",
            },
        },
    },
    plugins: [],
};
