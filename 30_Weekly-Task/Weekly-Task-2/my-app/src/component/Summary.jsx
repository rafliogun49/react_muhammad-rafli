import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import SummaryItem from "./SummaryItem";

const Summary = () => {
  const {id} = useParams();
  const data = useSelector((state) => state.summary.data);
  const realId = parseInt(id);
  return (
    <div className="container col-lg-9 col-md-9 col-sm-8 p-5">
      {<SummaryItem data={data[realId]} />}
    </div>
  );
};

export default Summary;
