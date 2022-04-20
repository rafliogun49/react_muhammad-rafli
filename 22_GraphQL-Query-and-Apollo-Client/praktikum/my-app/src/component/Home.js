import {Component} from "react";
import {v4 as uuidv4} from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import {gql, useQuery} from "@apollo/client";
import Loading from "./Loading";

//This is unfinished project
//Jangan dinilai dulu
//masih kurang satu fitur

const GetPassengerList = gql`
  query MyQuery {
    passenger {
      nama
      umur
      jenis_kelamin
    }
  }
`;

const GetQueryFromId = gql`
  query MyQuery($id: Int!) {
    passenger_by_pk(id: $id) {
      jenis_kelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const {data, loading, error} = useQuery(GetPassengerList);

  if (error) {
    console.log(error);
    return null;
  }
  return (
    <div>
      <Header />
      {loading ? <Loading /> : <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
};

const hapusPengunjung = (id) => {
  //   setState({
  //     data: [
  //       ...this.state.data.filter((item) => {
  //         return item.id !== id;
  //       }),
  //     ],
  //   });
};

const tambahPengunjung = (newUser) => {
  //   const newData = {
  //     id: uuidv4(),
  //     ...newUser,
  //   };
  //   setState({
  //     data: [data, newData],
  //   });
};

export default Home;
