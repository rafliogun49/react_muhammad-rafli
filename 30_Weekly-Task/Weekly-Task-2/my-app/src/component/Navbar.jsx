import {useNavigate} from "react-router-dom";

const Navbar = ({menuCollapse, setMenuCollapse}) => {
  let navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickForward = () => {
    navigate(1);
  };
  return (
    <div className="navbar navbar-expand-lg py-0 bg-dark text-light">
      <div className="container-fluid d-flex justify-content-between py-2  border-bottom border-secondary">
        <div className="left d-flex gap-2">
          <button className="btn" onClick={() => setMenuCollapse(!menuCollapse)}>
            <i className="bi bi-list text-light "></i>
          </button>
          <div className="arrow-container d-flex gap-1">
            <button className="btn" onClick={handleClickBack}>
              <i className="bi bi-arrow-left text-light"></i>
            </button>
            <button className="btn" onClick={handleClickForward}>
              <i class="bi bi-arrow-right text-light"></i>
            </button>
          </div>
        </div>
        <div className="center">
          <span className="fw-bold text-light">Weekly Notes</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
