import { ReactComponent as WaveSectionHaikeiDivider } from "../../../../img/WaveSectionHaikeiDivider.svg";
import EachOverviewProject from "./EachOverviewProject";

const OverviewProjects = ({ projects, setprojects }) => {
  const projectSortBy = (SortType) => {
    if (SortType === "Relevance") {
      let Relevance = projects.sort((a, b) => parseInt(a.Id) - parseInt(b.Id));
      setprojects([...Relevance]);
    } else {
      let DateAdded = projects.sort(
        (a, b) => new Date(a.Date) - new Date(b.Date)
      );
      setprojects([...DateAdded]);
    }
  };
  return (
    <section
      className="home_section_two_overview_projs"
      id="home_section_two_overview_projs"
    >
      <WaveSectionHaikeiDivider />
      <h2>
        <span>#</span>Projects
      </h2>
      <div
        id="overview_projs"
        className="carousel slide position-relative d-flex align-items-center"
        data-bs-ride="carousel"
      >
        <button
          className="carousel-controls carousel-control-prev"
          type="button"
          data-bs-target="#overview_projs"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <div className="carousel-indicators">
          {projects
            .filter(({ Tags }) => Tags.includes("Main"))
            .map((_, index) => (
              <button
                key={"projects-carousel-indicators" + index}
                type="button"
                data-bs-target="#overview_projs"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : ""}
                aria-label={`Slide ${index}`}
              ></button>
            ))}
        </div>
        <div className="carousel-inner">
          {projects
            .filter(({ Tags }) => Tags.includes("Main"))
            .map(
              (
                { Id, Title, Description, Url, Image, UrlTitle, Theme },
                index
              ) => (
                <EachOverviewProject
                  key={"EachOverviewProject" + Id + Title}
                  index={index}
                  Id={Id}
                  Title={Title}
                  Description={Description}
                  Url={Url}
                  UrlTitle={UrlTitle}
                  Image={Image}
                  Theme={Theme}
                />
              )
            )}
        </div>

        <button
          className="carousel-controls carousel-control-next"
          type="button"
          data-bs-target="#overview_projs"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="all_overview_projs_gallery_wrapper d-flex flex-column gap-3">
        <div className="AOPG_sort d-flex align-items-center gap-2">
          <span>Sort By:</span>
          <select
            id="ProjectSelectSortBy"
            onChange={(e) => projectSortBy(e.target.value)}
            className="form-select"
          >
            <option value="Relevance">Relevance</option>
            <option value="Date Added">Date Added</option>
          </select>
        </div>
        <div className="all_overview_projs_gallery_content">
          {projects.map(
            (
              { Id, Title, Description, Url, UrlTitle, Theme, Image, Tags },
              index
            ) => (
              <div
                key={Id + Title + index}
                className="overview_projs_gallery_container"
                style={{ backgroundColor: `var(--bs-${Theme})` }}
                onClick={() => {
                  window.open(Url, "_blank");
                }}
              >
                <img
                  className="overview_projs_gallery_img"
                  src={Image}
                  alt={Title + "-Image"}
                />
                <div className="overview_projs_hover_info position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                  <h5>{Title}</h5>
                  <p>{Description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OverviewProjects;
