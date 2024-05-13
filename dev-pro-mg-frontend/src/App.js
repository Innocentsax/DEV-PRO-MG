import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
