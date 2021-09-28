import React from "react";
import MessageBox from "./MessageBox";

export default function unauthorized() {
  return (
    <div>
      <MessageBox>Anda Tidak Punya Hak Edit</MessageBox>
    </div>
  );
}
