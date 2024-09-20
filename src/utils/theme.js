import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "80em", // 1280px
  xl: "90em", // 1440px
  "2xl": "120em", // 1920px
};

export const chakraTheme = extendTheme({
  breakpoints,
  styles: {
    global: {
      "html, body": {
        fontFamily: "FiraGO, sans-serif",
      },
    },
  },
});
