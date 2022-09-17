import { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
const EachLanguage = ({ Level, id, Image, Name, Description, FillColor }) => {
  const [ViewFullDesc, setViewFullDesc] = useState("none");
  const ToggleViewFullDescription = () => {
    if (Description.length < 150 || ViewFullDesc === "block")
      return <span>{Description}</span>;
    let SlicedDescription = Description.slice(0, 105)+"...";
    return (
      <span>
        
        {SlicedDescription}
        <span
          className="ms-2 btn btn-sm btn--color-design-1"
          onClick={() => setViewFullDesc("block")}
        >
          Read More
        </span>
      </span>
    );
  };
  return (
    <div
      className="HSOL_languages my-3"
      style={{
        boxShadow: `0px 0px 8px 0px ${FillColor}`,
      }}
    >
      <div className="HSOL_languages_img">
        <img src={Image} alt={Name} />
      </div>
      <div className="HSOL_languages_content">
        <h4 style={{ color: FillColor }}>{Name}</h4>
        <h5>
          <span className="HSOL_lc_title">Level</span>: {Level}
        </h5>
        <p>
          <span className="HSOL_lc_title">Description:</span>{" "}
          {ToggleViewFullDescription()}
        </p>
      </div>
      <div className="HSOL_languages_btns mt-auto mb-0 justify-content-right gap-2">
        <button className="btn btn-light-success">
          <ScrollIntoView
            key={"HSOLv_MyProjects"}
            selector={`#home_section_two_overview_projs`}
            smooth={true}
            alignToTop={true}
          >
            See Projects
          </ScrollIntoView>
        </button>
      </div>
    </div>
  );
};

export default EachLanguage;
