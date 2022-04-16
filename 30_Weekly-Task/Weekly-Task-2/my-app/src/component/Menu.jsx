import MenuItem from "./MenuItem";
import {useSelector} from "react-redux";

const Menu = () => {
  const data = useSelector((state) => state.summary.data);
  const getTitleData = data.map((val) => (
    <MenuItem text={val.title} icon={val.icon} key={val.id} id={val.id} />
  ));
  return (
    <div className="menu-container col-lg-3 col-md-3 col-sm-4 border-end border-secondary p-0 bg-dark text-light">
      <div className="menu px-2 py-4">
        <h4>Weekly Notes</h4>

        <div className="notes row">
          <h6>Notes</h6>
          {getTitleData}
        </div>
      </div>
    </div>
  );
};

export default Menu;
