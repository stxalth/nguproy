import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function EditorRoute({ component: Component, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <Route
      {...rest}
      render={(props) =>
        (userInfo && userInfo.isEditor) || userInfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/unathorized" />
        )
      }
    ></Route>
  );
}
