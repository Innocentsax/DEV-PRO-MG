import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Navbar />
      <Home /> */}
      <Auth />
    </ThemeProvider>
  );
}

export default App;
