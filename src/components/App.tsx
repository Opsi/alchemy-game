import { ChakraProvider } from "@chakra-ui/react";
import { BACKGROUND_COLOR } from "./common/colors";
import MainPage from "./MainPage";

function App() {
  return (
    <div
      style={{
        height: '100vh',
        background: BACKGROUND_COLOR,
      }}
    >
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
