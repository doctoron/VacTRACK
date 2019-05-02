import React from 'react';

const MultiStepForm = props =>
  <div className={`MultiStepForm${props.fluid ? "-fluid" : ""}`}>
  {/* Need {props.children} in order to display all of the photos */}
    {props.children}
  </div>;

export default MultiStepForm;