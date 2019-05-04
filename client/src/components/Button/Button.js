import React from "react";

export function Button(props) {
    return (
      <button {...props} style={{ float: "left", marginBottom: 5 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }

export default Button;
