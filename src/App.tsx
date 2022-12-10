import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { MainPage } from "./MainPage/MainPage";

export const App: React.FC = () => (
	<div
		style={{
			height: "100vh",
		}}
	>
		<ChakraProvider>
			<MainPage />
		</ChakraProvider>
	</div>
);
