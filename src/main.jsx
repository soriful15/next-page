import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';

import Books from './Components/Books/Books';
import BookDetail from './Components/BookDetail/BookDetail';
import Error from './Components/Errorpage/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error></Error>,
    children: [

      {
path: '/',
element: <Home></Home>
      },
      {
path: 'books',
element: <Books></Books>,
loader: ()=>fetch ('https://api.itbook.store/1.0/new')
      },
      {
path: 'book/:id',
element: <BookDetail></BookDetail>,
loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)

      },
      {
        path: 'about',
        element : <About></About>
      },
    ]
  },
 /*  {
    path:'about',
    element : <div>about page</div>
  } */
]);


ReactDOM.createRoot(document.getElementById('root')).render( 
<RouterProvider router={router}></RouterProvider>
)
