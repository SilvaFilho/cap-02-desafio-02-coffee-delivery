/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        fontFamily: {
            header: ["Baloo 2", "sans-serif"],
            text: ["Roboto", "sans-serif"],
        },
        colors: {
            "yellow": {
                "light": "#F1E9C9",
                "normal": "#DBAC2C",
                "dark": "#C47F17",
            },
            "purple": {
                "light": "#EBE5F9",
                "normal": "#8047F8",
                "dark": "#4B2995",
            },
            "gray": {
                100: "#FAFAFA",
                200: "#F3F2F2",
                300: "#EDEDED",
                400: "#E6E5E5",
                500: "#D7D5D5",
                600: "#8D8686",
                700: "#574F4D",
                800: "#403937",
                900: "#272221",
            },
            "white": "#FFF",
        },
        extend: {},
    },
    plugins: [],
};
