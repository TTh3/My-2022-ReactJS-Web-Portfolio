import { useEffect, useState } from "react";

import JsilverioUseLE from "./components/Global/JsilverioUseLE";
import LoadingScreen from "./components/Global/LoadingScreen";
// Mini Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// Page Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [webTheme, setWebTheme] = useState("");
  const [LoadingScreenToggle, setLoadingScreenToggle] = useState("flex");
  const [langs, setlangs] = useState([]);
  const [projects, setprojects] = useState([]);
  const [NavAnimationStyles, setNavAnimationStyles] = useState("");
  const handleToggleWebTheme = () => {
    let valWebTheme = webTheme === "" ? "light" : "";
    setWebTheme(valWebTheme);
    localStorage.setItem("JsilverioWebTheme", valWebTheme);
  };
  JsilverioUseLE(setWebTheme, setlangs, setprojects, setLoadingScreenToggle);
  useEffect(() => {
    console.log(NavAnimationStyles, projects);
  }, [NavAnimationStyles, projects]);
  return (
    <div
      className={`app-wrapper w-100 h-100${
        webTheme.length ? ` ${webTheme}` : ""
      }`}
    >
      <LoadingScreen LoadingScreenToggle={LoadingScreenToggle} />
      <Nav NavAnimationStyles={NavAnimationStyles} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              webTheme={webTheme}
              setNavAnimationStyles={setNavAnimationStyles}
              handleToggleWebTheme={handleToggleWebTheme}
              langs={langs}
              setlangs={setlangs}
              projects={projects}
              setprojects={setprojects}
            />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
