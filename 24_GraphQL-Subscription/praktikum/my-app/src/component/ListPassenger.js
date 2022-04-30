import {useState} from "react";
import ListItem from "./ListItem";
const ListPassenger = ({data, hapusPengunjung, fetchDataById, singleData, updatePengunjung}) => {
  const [uid, setUid] = useState("");

  const handleInput = (e) => {
    setUid(e.target.value);
  };

  const submitInput = () => {
    fetchDataById({
      variables: {
        id: parseInt(uid),
      },
    });
  };

  return (
    <div>
      <input placeholder="Cari id" onChange={handleInput} />
      <button onClick={submitInput}>Search</button>
      <br />
      <br />
      <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        {singleData ? (
          <ListItem data={singleData.passenger_by_pk} />
        ) : (
          data?.passenger.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={hapusPengunjung}
              updatePengunjung={updatePengunjung}
            />
          ))
        )}
      </table>
    </div>
  );
};

export default ListPassenger;
