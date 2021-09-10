import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listStudi } from "../Actions/programstudiActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";

export default function DaftarProgramstudi(props) {
  const dispatch = useDispatch();
  const studiList = useSelector((state) => state.studiList);
  const { loading, error, dataprogramstudi } = studiList;
  useEffect(() => {
    dispatch(listStudi());
  }, [dispatch]);
  const deleteHandler = () => {
    //todo dispatch delete
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="container">
          <h1 className="judultabel">Daftar Program Studi</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Program Studi</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {dataprogramstudi.map((studi) => (
                <tr key={studi.kode}>
                  <td>{studi.kode}</td>
                  <td>{studi.programstudi}</td>
                  <td>
                    <div className="buttonaksi">
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() =>
                          props.hitory.push(
                            `/daftarprogramstudi/${studi.kode}/edit`
                          )
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="material-icons"
                        onClick={() => deleteHandler(studi)}
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
      )}
    </div>
  );
}
