import React from 'react';

const Home = ({ state }) => (
  <div>
    {state.name ?
      <div>
        {state.name}
      </div>
      :
      <div>
        <h1>This is the Home page on a secure route and contains the results of
      the MyVacTRACK vaccination recommendations and record.</h1>
      </div>
    }
  </div>
)
export default Home;