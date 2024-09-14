import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { ModalProvider } from "./context/ModalContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "FiraGO, sans-serif",
      },
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <App />
        </ModalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
