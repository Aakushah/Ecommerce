import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './index.scss'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <ToastContainer />
//   </React.StrictMode>,

// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer />
  </>,

)
