import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div>
     <Header></Header>
    {/* header */}
    <Outlet></Outlet>
    {/* footer */}
    </div>
  );
};

export default App;