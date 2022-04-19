import ListItem from "./ListItem";
const ListPassenger = ({data, hapusPengunjung}) => {
  return (
    <div>
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
