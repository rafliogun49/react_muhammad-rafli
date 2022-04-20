import {useState} from "react";
import ListItem from "./ListItem";
const ListPassenger = ({data, hapusPengunjung}) => {
  const [id, setId] = useState(null);

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const submitInput = () => {
    console.log(id);
  };
  return (
    <div>
      <input placeholder="Cari id" onChange={handleInput} />
      <button onClick={submitInput}>Search</button>
      <br />
      <br />
      <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.passenger.map((item) => (
          <ListItem key={item.id} data={item} hapusPengunjung={hapusPengunjung()} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
