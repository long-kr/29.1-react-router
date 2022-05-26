import React from "react";
import { useHistory } from "react-router-dom";

function GoHomeButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("/")}>
      Go Home
    </button>
  );
}

export default GoHomeButton;