import React, { Children } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Shipping from './Pages/Shipping';
import Orders from './Pages/Orders';





import Loading from './Components/Loading/Loading.jsx';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';




const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);


const App = () => {

  const notify = () => toast("Wow so easy!");  

  return (
    <Router>




      <Routes>

          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/orders' element={<Orders />} />
         
          <Route  path="/*" element = {
              
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </Layout>
                
               
              

          }>

          

        
            
          </Route>

        

      </Routes>

     


    </Router>
  )
}

export default App