import EachLanguage from "./EachLanguage";
import { useState, useEffect } from "react";
const Languages = ({ langs }) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const SplitchunkArray = (array) => {
    let result = [];
    let size = 3;
    if (screenSize.dynamicWidth <= 1200) size = 2;
    if (screenSize.dynamicWidth <= 800) size = 1;

    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  return langs.map(({ ObjectTitle, ObjectId, Content }, groupValue) => (
    <div
      key={`languages_${ObjectTitle + ObjectId}`}
      className={`HSOL_box_languages programlangs_${ObjectTitle}`}
    >
      <h3>
        <span className="HSObl_id">0{ObjectId + 1}</span>{" "}
        <span className="HSObl_title">{ObjectTitle}</span>
      </h3>
      <div className="HSOL_box_languages_content">
        <div
          id="carouselCodeLanguages01"
          className="carousel slide"
          data-interval="false"
        >
          <button
            className={`carousel-control-prev${
              Content.length < 4 ? " d-none" : ""
            }`}
            type="button"
            data-bs-target="#carouselCodeLanguages01"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <div className="carousel-inner">
            {SplitchunkArray(Content).map((LanguagesContent, contentI) => (
              <div
                key={"LanguagesContent" + contentI}
                className={"carousel-item" + (contentI === 0 ? " active" : "")}
              >
                <div className="LanguagesContentWrapperCarousel">
                  {LanguagesContent.map(
                    ({
                      Level,
                      id,
                      Image,
                      Name,
                      Description,
                      FillColor,
                      FillColorText,
                    }) => (
                      <EachLanguage
                        Level={Level}
                        key={`languages_${id}${Name}`}
                        id={id}
                        Image={Image}
                        Name={Name}
                        Description={Description}
                        FillColor={FillColor}
                        FillColorText={FillColorText}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className={`carousel-control-next${
              Content.length < 4 ? " d-none" : ""
            }`}
            type="button"
            data-bs-target="#carouselCodeLanguages01"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Languages;
