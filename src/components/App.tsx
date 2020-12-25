import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import './main.css';
import MainPage from "./MainPage";

function App() {
  return (
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
  );
}

export default App;
