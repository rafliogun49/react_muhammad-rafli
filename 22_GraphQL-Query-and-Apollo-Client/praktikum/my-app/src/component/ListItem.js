import "./Home.css";
const ListItem = (props) => {
  const {id, nama, umur, jenis_kelamin} = props.data;

  return (
    <tbody>
      <tr key={id}>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{jenis_kelamin}</td>
        <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
          <button>Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
