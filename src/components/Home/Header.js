import { useEffect, useRef } from "react";
import ScrollIntoView from "react-scroll-into-view";
import VanillaTilt from "vanilla-tilt";
import BG from "../../img/BG.jpg";
import HeaderWave from "../../img/layered-waves-haikei.svg";
// Logos
import BoostrapLogo from "../../img/Bootstrap_logo.svg.png";
import ReactLogo from "../../img/react-logo.png";
import PythonLogo from "../../img/Python-logo.png";
const options = {
  perspective: 3000,
  speed: 4000,
  max: 10,
};
function HeaderBGimage({ options, webTheme, handleToggleWebTheme }) {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div>
      <header>
        <div className="absolute_header_content">
          <div className="header_bg_image">
            <img src={BG} alt="HeaderBackgroundImage" />
          </div>
          <div className="header_wave">
            <img src={HeaderWave} alt="HeaderWave" />
          </div>
        </div>
        <div
          className="header-main-container position-relative"
          ref={tilt}
          {...options}
          data-tilt
          data-tilt-full-page-listening
        >
          <div className="row">
            <div className="col-md-7 HMC_textContent">
              <h1>
                Hi there! I am <p>Jaylord Silverio</p> and a certified{" "}
                <i>Chill</i> <span>Web Developer</span>
              </h1>
              <p>
                Though I'm only a senior highschool student, I do know that I
                love coding!
              </p>
              <div className="HMC_buttons d-flex align-items-center gap-4">
                <ScrollIntoView
                  selector="#home_section_one_languages"
                  smooth={true}
                  alignToTop={true}
                >
                  <button className="btn btn-md btn--color-design-1 fw-bold px-3 py-2">
                    Languages
                  </button>
                </ScrollIntoView>
                <div className="wrapper_toggleWebTheme">
                  <label className="toggleWebTheme">    
                    <input
                      type="checkbox"
                      checked={webTheme === "" ? false : true}
                      onChange={handleToggleWebTheme}
                      label="Toggle Web Theme"
                      tabIndex={0}
                    />
                    <span className="toggleWebThemeSlider slider round"></span>
                  </label>
                  <p className="toggleWebThemeLabel">
                    {webTheme.length ? "Light" : "Dark"} Mode
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 HMC_Logos">
              <div className="row">
                <div className="col-6">
                  <img src={ReactLogo} className="adsad" alt="React-Logo" />
                </div>
                <div className="col-6">
                  <img src={BoostrapLogo} alt="Bootstrap-Logo" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src={PythonLogo} alt="Python-Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
const Header = ({ webTheme, handleToggleWebTheme }) => {
  return (
    <>
      <HeaderBGimage
        options={options}
        webTheme={webTheme}
        handleToggleWebTheme={handleToggleWebTheme}
      />
    </>
  );
};

export default Header;
