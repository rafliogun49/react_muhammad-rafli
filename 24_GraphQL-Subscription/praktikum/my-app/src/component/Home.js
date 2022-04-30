import {Component, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import {gql, useLazyQuery, useQuery, useMutation} from "@apollo/client";
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

const InsertPassenger = gql`
  mutation MyMutation2($objects: [passenger_insert_input!] = {}) {
    insert_passenger(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

const DeletePassenger = gql`
  mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
      id
    }
  }
`;

const UpdatePassenger = gql`
  mutation MyMutation3($id: Int!, $jenis_kelamin: String!, $umur: String!, $nama: String!) {
    update_passenger_by_pk(
      _set: {umur: $umur, jenis_kelamin: $jenis_kelamin, nama: $nama}
      pk_columns: {id: $id}
    ) {
      id
    }
  }
`;

const Home = () => {
  const [fetchDataById, {data, loading, error}] = useLazyQuery(GetQueryFromId);
  const {data: response, loading: isLoading, refetch} = useQuery(GetPassengerList);
  const [insertPassenger, {loading: loadingInsert}] = useMutation(InsertPassenger, {
    refetchQueries: [GetPassengerList],
  });
  const [removePassenger, {loading: loadingRemove}] = useMutation(DeletePassenger, {
    refetchQueries: [GetPassengerList],
  });

  const [updatePassenger, {loading: loadingUpdate}] = useMutation(UpdatePassenger, {
    refetchQueries: [GetPassengerList],
  });

  if (error) {
    console.log(error);
    return null;
  }

  const tambahPengunjung = (newUser) => {
    console.log(newUser);
    insertPassenger({
      variables: {
        objects: newUser,
      },
    });
  };

  const hapusPengunjung = (id) => {
    removePassenger({
      variables: {
        id: id,
      },
    });
  };

  const updatePengunjung = (id, data) => {
    updatePassenger({
      variables: {
        id: id,
        ...data,
      },
    });
  };

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
          updatePengunjung={updatePengunjung}
        />
      )}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
};

export default Home;
