import { useState } from "react";

import JsilverioUseLE from "./components/Global/JsilverioUseLE";
import LoadingStater from "./components/Global/LoadingStater";
// Mini Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// Page Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [webTheme, setWebTheme] = useState("");
  // const [scrollLoading, setscrollLoading] = useState("vh-100 overflow-hidden");
  const [LoadingStaterToggle, setLoadingStaterToggle] = useState("flex");
  const [langs, setlangs] = useState([]);
  const [projects, setprojects] = useState([]);
  const [NavAnimationStyles, setNavAnimationStyles] = useState("");
  const handleToggleWebTheme = () => {
    let valWebTheme = webTheme === "" ? "light" : "";
    setWebTheme(valWebTheme);
    localStorage.setItem("JsilverioWebTheme", valWebTheme);
  };
  JsilverioUseLE(setWebTheme, setlangs, setprojects, setLoadingStaterToggle);
  // useEffect(() => {
  //   setscrollLoading("h-100 overflow-auto");
  // }, []);
  const scrollLoading =
    LoadingStaterToggle === "flex"
      ? "vh-100 overflow-hidden"
      : "h-100 overflow-y-auto";
  return (
    <div
      className={`app-wrapper w-100 ${scrollLoading} ${
        webTheme.length ? `${webTheme}` : ""
      }`}
    >
      <LoadingStater LoadingStaterToggle={LoadingStaterToggle} />
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
