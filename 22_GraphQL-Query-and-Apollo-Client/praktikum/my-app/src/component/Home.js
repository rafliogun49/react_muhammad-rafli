import {Component, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import Loading from "./Loading";

const GetPassengerList = gql`
  query MyQuery {
    passenger {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

const GetQueryFromId = gql`
  query MyQuery($id: Int!) {
    passenger_by_pk(id: $id) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const [fetchDataById, {data, loading, error}] = useLazyQuery(GetQueryFromId);
  const {data: response, loading: isLoading} = useQuery(GetPassengerList);

  if (error) {
    console.log(error);
    return null;
  }
  return (
    <div>
      <Header />
      {isLoading || loading ? (
        <Loading />
      ) : (
        <ListPassenger
          data={response}
          singleData={data}
          hapusPengunjung={hapusPengunjung}
          fetchDataById={fetchDataById}
          loading={loading}
        />
      )}
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
