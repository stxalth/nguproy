import React from "react";
import DataUsageIcon from "@material-ui/icons/DataUsage";

export default function LoadingBox() {
  return (
    <div className="loading">
      <i>
        {" "}
        <DataUsageIcon />{" "}
      </i>{" "}
      Loading...
    </div>
  );
}
