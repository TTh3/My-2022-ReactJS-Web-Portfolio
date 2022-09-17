import { Link } from "react-router-dom";
const MobileNav = ({ navLinks }) => {
  return (
    <div
      className="modal fade"
      id="MobileNavigation"
      tabIndex="-1"
      aria-labelledby="MobileNavigationLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="MobileNavigationLabel">
              Mobile Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {navLinks["MiddleNavLink"].map((navlink) => (
              <Link
                key={`${navlink[0]} MobileNavLink`}
                to={`/${navlink.length === 3 ? navlink[2] : navlink[0]}`}
              >
                {navlink[1]}
                <p>{navlink[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
