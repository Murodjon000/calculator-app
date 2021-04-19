import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'

const App = () => {
  return (
    <div>
      <Display total={'0'} next={'0'} />
      <ButtonPanel handleClick={(f) => f} />
    </div>
  );
};

export default App;
