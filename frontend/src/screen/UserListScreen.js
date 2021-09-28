import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, listUsers } from "../Actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";

export default function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm("Apakah Anda yakin?")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="container">
        <h1 className="judultabel">Daftar User</h1>
        <p>
          <Link to="/register">Buat Akun</Link>
        </p>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        {successDelete && (
          <MessageBox variant="success">User Berhasil Terhapus</MessageBox>
        )}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Hak Edit</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin || user.isEditor ? "YES" : "NO"}</td>
                  <td>
                    <button
                      type="button"
                      className="material-icons"
                      onClick={() =>
                        props.history.push(`/users/${user._id}/edit`)
                      }
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="material-icons"
                      onClick={() => {
                        deleteHandler(user);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
