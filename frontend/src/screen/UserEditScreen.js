import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../Actions/userActions";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";
import { USER_UPDATE_RESET } from "../constants/userConstants";

export default function UserEditScreen(props) {
  const userId = props.match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditor, setIsEditor] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/userlist");
    }
    if (!user || user._id !== userId || successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsEditor(user.isEditor);
    }
  }, [dispatch, user, userId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update
    dispatch(
      updateUser({
        _id: userId,
        name,
        email,
        isEditor,
      })
    );
  };
  return (
    <div>
      <Sidebar />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{error}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Masukkan Nama"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="isEditor">Editor</label>
              <input
                className="checkbox"
                id="isEditor"
                type="checkbox"
                checked={isEditor}
                onChange={(e) => {
                  setIsEditor(e.target.checked);
                }}
              ></input>
            </div>
            <div>
              <button type="submit" className="login">
                update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
