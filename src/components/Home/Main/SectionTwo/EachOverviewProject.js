import Radium from "radium";
const EachOverviewProject = ({
  index,
  Id,
  Title,
  Description,
  Url,
  Image,
  UrlTitle,
  Theme,
}) => {
  const inputStyle = {
    position: "absolute",
    top: 0,
    borderRadius: "4px",
    width: "60px",
    height: "5px",
    backgroundColor: `var(--bs-${Theme})`,
  };
  return (
    <div
      className={
        "carousel-item" +
        (index === 0 ? " active " : " ") +
        "each-overview-project"
      }
    >
      <div className="row">
        <div className="col-md-7">
          <a
            className="img-desc-ovw-proj-buttons-url"
            href={Url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Image}
              className="d-block w-100"
              alt={`No. ${Id}: ${Title}`}
            />
          </a>
        </div>
        <div className="col-md-5">
          <div className="description-overview-project">
            <div style={inputStyle} />
            <h3>{Title}</h3>
            <p>{Description}</p>
            <div className="desc-ovw-proj-buttons">
              <a
                href={Url}
                target="_blank"
                className="desc-ovw-proj-buttons-url"
                rel="noreferrer"
              >
                <button className={`btn btn-${Theme} shadow`}>
                  Vist Site:
                  <b>{` ${
                    UrlTitle.length > 15
                      ? UrlTitle.slice(0, 15) + "..."
                      : UrlTitle
                  }`}</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(EachOverviewProject);
