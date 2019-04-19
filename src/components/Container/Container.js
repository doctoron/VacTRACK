import React from "react";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
  {/* Need {props.children} in order to display all of the photos */}
    {props.children}
  </div>;

export default Container;
