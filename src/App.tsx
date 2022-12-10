import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BACKGROUND_COLOR } from "./components/common/colors";
import { GatherContextProvider } from "./main/GatherContext";
import MainPage from "./main/MainPage";

export const App: React.FC = () => (
  <div
    style={{
      height: "100vh",
      background: BACKGROUND_COLOR,
    }}
  >
    <GatherContextProvider>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </GatherContextProvider>
  </div>
);
