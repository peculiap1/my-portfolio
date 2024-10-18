import Projects from "./pages/Projects";
import "./App.css";
import AppNavbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <AppNavbar></AppNavbar>
    </NextUIProvider>
  );
}

export default App;
