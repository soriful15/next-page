import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
     <Header></Header>
    {/* header */}
    <div className='min-h-[calc(100vh-136px)]'>
    <Outlet></Outlet>
    </div>
    {/* footer */}
    <Footer></Footer>
    </div>
  );
};

export default App;