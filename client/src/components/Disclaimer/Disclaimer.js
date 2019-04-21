import React from 'react';

const Disclaimer = props =>
  <div className={`disclaimer${props.fluid ? "-fluid" : ""}`}>
  {/* Need {props.children} in order to display all of the photos */}
    {props.children}
  </div>;

export default Disclaimer;