import React from 'react';

const Register = props =>
  <div className={`Register${props.fluid ? "-fluid" : ""}`}>
  {/* Need {props.children} in order to display all of the photos */}
    {props.children}
  </div>;

export default Register;