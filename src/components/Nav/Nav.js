import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { ReactComponent as HouseSVG } from "../../img/house.svg";
import { ReactComponent as PersonSVG } from "../../img/person.svg";

const Nav = ({ NavAnimationStyles }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navLinks, ] = useState({
    MiddleNavLink: [
      // [Name of Link, Image/SVG, Url Link=null]
      ["Home", <HouseSVG />, ""],
      ["About", <PersonSVG />],
    ],
    RightNavLink: [
      // [Name of Link, Name of Unique Class, Button Group Class, Url Link=null, ScrollIntoView Id]
      [
        "My Projects",
        "ncv_MyProjects",
        "btn btn-light-success",
        "",
        "home_section_two_overview_projs",
      ],
    ],
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const ProjectViewHandler = () => {
    if (location.pathname !== "/") {
      navigate("./", { replace: true });
    }
  };
  return (
    <>
      <MobileNav navLinks={navLinks} />
      <nav
        className={`position-fixed top-0 start-50 translate-middle-x d-flex align-items-center mt-4${
          NavAnimationStyles.length ? ` ${NavAnimationStyles}` : ""
        }`}
      >
        <Link to="/" className="header-title">
          Jsilverio<span>.</span>
        </Link>
        <ul className="nav_content_links gap-4 m-0 p-0">
          {navLinks["MiddleNavLink"].map((navlink) => (
            <Link
              key={`${navlink[0]} Link`}
              to={`/${navlink.length === 3 ? navlink[2] : navlink[0]}`}
            >
              {navlink[1]}
              <p>{navlink[0]}</p>
            </Link>
          ))}
        </ul>
        <ul className="nav_content_right m-0 p-0">
          {navLinks["RightNavLink"].map((navlink) => (
            <ScrollIntoView
              onClick={ProjectViewHandler}
              key={navlink[1]}
              selector={`#${navlink[4]}`}
              smooth={true}
              alignToTop={true}
            >
              <li key={navlink[1]} className={navlink[1]}>
                <button className={navlink[2]}>{navlink[0]}</button>
              </li>
            </ScrollIntoView>
          ))}

          <li className="mobileNavModalOpener">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#MobileNavigation"
            >
              <span>Menu</span>
              <div className="menuIcon">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
