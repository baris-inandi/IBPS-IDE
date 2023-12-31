/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            sans: [
                "-apple-system",
                "BlinkMacSystemFont",
                "Arimo",
                "Inter",
                "Roboto",
                "Arial",
                "ui-sans-serif",
                "system-ui",
            ],
            mono: ["DM Mono", "Menlo", "Cascadia Code", "mono"],
            logo: [
                "Arimo",
                "-apple-system",
                "BlinkMacSystemFont",
                "Inter",
                "Roboto",
                "Arial",
                "ui-sans-serif",
                "system-ui",
            ],
        },
        extend: {
            colors: {
                onedark: {
                    50: "#D7DAE0",
                    100: "#CBCFD7",
                    200: "#B4BAC5",
                    300: "#9DA5B4",
                    400: "#868FA2",
                    500: "#6F7A90",
                    600: "#5D6779",
                    700: "#4B5362",
                    800: "#3A404B",
                    900: "#282C34",
                    950: "#1C1F24",
                    1000: "#14171a",
                },
                light: {
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#F5F2E8",
                    300: "#E8E3CC",
                    400: "#D7CEA5",
                    500: "#C5B97F",
                    600: "#B4A358",
                    700: "#928442",
                    800: "#6B6130",
                    900: "#453E1F",
                    950: "#312C16",
                },
            },
        },
    },
    plugins: [],
};

