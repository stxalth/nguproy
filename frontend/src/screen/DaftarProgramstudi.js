import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProgram } from "../Actions/programstudiActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import data from "../data";

export default function DaftarProgramstudi(props) {
  // const dispatch = useDispatch();
  // const programstudiList = useSelector((state) => state.programstudiList);
  // const { loading, error, dataprogramstudi } = programstudiList;
  // useEffect(() => {
  //   dispatch(listProgram());
  // }, [dispatch]);
  const deleteHandler = () => {
    //todo dispatch delete
  };
  return (
    <div>
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : ()} */}
      <div className="container">
        <h1 className="judultabel">Daftar Program Studi</h1>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Kode</th>
              <th>Program Studi</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.dataprogramstudi.map((dataprogramstudi) => (
              <tr>
                <td>{dataprogramstudi.no}</td>
                <td>{dataprogramstudi.kode}</td>
                <td>{dataprogramstudi.programstudi}</td>
                <td>
                  <div className="buttonaksi">
                    <button
                      type="button"
                      className="material-icons"
                      onClick={() =>
                        props.hitory.push(
                          `/daftarkegiatan/${dataprogramstudi.no}/edit`
                        )
                      }
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="material-icons"
                      onClick={() => deleteHandler(data)}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
