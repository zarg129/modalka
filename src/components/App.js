import React, { useState, Component } from "react";
import Modalka from './Modalka';
import '../index.scss';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    return setLoading(true);
  };
  
  return (
    <div className='App'>
      <button className="App__button button" onClick={handleClick}>Открыть модалку</button>
      {loading
        ? <Modalka setLoading={setLoading} />
        : ''
      }
    </div>
  );
};

export default App;
