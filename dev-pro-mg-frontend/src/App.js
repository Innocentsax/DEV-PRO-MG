import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "./ReduxToolkit/TaskSlice";
import { getUserProfile } from "./ReduxToolkit/AuthSlice";
import Auth from "./component/Auth/Auth";

function App() {
  const user = true;
  const dispatch = useDispatch();
  const { task, auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
