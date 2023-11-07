import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Authprovider from './Provider/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
  </div>
)

