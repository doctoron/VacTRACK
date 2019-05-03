import React from 'react';

const Header = props =>
<div className={`header${props.fluid ? "-fluid" : ""}`}>
{/* Need {props.children} in order to display all of the photos */}
  {props.children}


</div>;

export default Header;


