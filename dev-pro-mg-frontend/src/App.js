import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
