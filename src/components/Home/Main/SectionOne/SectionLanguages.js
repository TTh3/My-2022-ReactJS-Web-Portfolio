import Languages from "./Languages";
import { ReactComponent as FunnelSVG } from "../../../../img/funnel.svg";
import { useState } from "react";
const SectionLanguages = ({ langs, setlangs }) => {
  const [ToggleButtonFilterState, setToggleButtonFilterState] = useState(false);
  function SortLanguagesHandler(langs, method) {
    console.log(langs, method);
    if (
      typeof method !== "string" ||
      !method === "ById" ||
      !method === "ByTitle"
    )
      return false;
    if (method === "ById")
      return JSON.parse(JSON.stringify(langs)).sort(
        (a, b) => a.ObjectId - b.ObjectId
      );

    if (method === "ByTitle")
      return JSON.parse(JSON.stringify(langs)).sort((a, b) =>
        a.ObjectTitle.localeCompare(b.ObjectTitle, "en", {
          numeric: true,
        })
      );

    return false;
  }
  return (
    <section
      className="home_section_one_languages"
      id="home_section_one_languages"
    >
      <div className="HSOL_content_wrapper">
        <div className="HSOL_nav">
          <h2>
            <span>#</span>Languages That I Know
          </h2>
          <div className="HSOL_nav_btns d-flex gap-1">
            <button
              className="HSOL_nav_btns_label btn btn-md btn-primary d-flex gap-2 align-items-center justify-content-center"
              onClick={() =>
                setToggleButtonFilterState(!ToggleButtonFilterState)
              }
            >
              <FunnelSVG />
              <span>Filter</span>
            </button>
            <div
              className={`HSOL_nav_btns_filterOptions d-${
                ToggleButtonFilterState ? "flex" : "none"
              } flex-column gap-1`}
            >
              <button
                className="btn btn-sm btn--color-design-1"
                onClick={() => {
                  let SortedLangs = SortLanguagesHandler(langs, "ById");
                  console.log("SortedLangs", SortedLangs);
                  setlangs(SortedLangs);
                }}
              >
                1-9
              </button>
              <button
                className="btn btn-sm btn--color-design-1"
                onClick={() => {
                  let SortedLangs = SortLanguagesHandler(langs, "ByTitle");
                  console.log("SortedLangs", SortedLangs);
                  setlangs(SortedLangs);
                }}
              >
                A-Z
              </button>
            </div>
          </div>
        </div>
        <div className="HSOL_languages_wrapper">
          <Languages langs={langs} />
        </div>
      </div>
      <div className="gradient-divider-section"></div>
    </section>
  );
};

export default SectionLanguages;
