import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";
const theme = extendTheme({

    fonts: {
        formCompTexts:
            "Inter",
    },
    colors: {
        authHeading: "#fff",
        authBg: "#295956",
        secondary: "#3d3d3d",
        formLabelColor: "#fff",
        greenText: "#111111"
    },
    gradient: {
        primary: "#255A42.100%",
        secondary: "#111111.100%"
    },

    Button: {
        variants: {
            formButtons: {
                bg: "#44b17f",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
            },


        },
    },
    fontSizes: {
        lg: "20px",
        xl: "30px",
        xs: "14px",
        sm: "16px",
        base: "14px",
        "2xl": "24px",
        "4xl": "10px"
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
    },
    breakpoints: {
        base: "0em",   // 0px
        sm: "30em",    // 480px
        md: "48em",    // 768px
        lg: "57em",    // 912px
        xl: "80em",    // 1280px
        "2xl": "96em", // 1536px
    },
    shadows: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.2)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        none: "none",
    }
});

export default theme;
