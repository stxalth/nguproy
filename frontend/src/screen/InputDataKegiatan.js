import React from "react";
import { useDispatch } from "react-redux";

export default function InputDataKegiatan() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}></form>
    </div>
  );
}
