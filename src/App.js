import React from 'react';
import {Routes,Route,} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Admin from './components/Admin';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import OrderConfirmed from './components/OrderConfirmed';
import Products from './components/Products';
import UserDetails from './components/UserDetails';
import ProfileCheck from './components/ProfileCheck';
import Users from './components/Users';
import Navbar from './Navbar';
import AuthProvider from './components/Auth';
import Login from './components/Login';

const LazyLorem = React.lazy(() => import('./components/Lorem'));

function App() {
  return (
    
      <AuthProvider children={'hello'}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={
        <React.Suspense fallback={<div style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><h2 style={{textAlign:'center'}}>Loading...</h2></div>}>
          <LazyLorem/>                                 
        </React.Suspense>
        }/>
        <Route path='orderConfirmed' element={<OrderConfirmed />}/>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts/>} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
          
        </Route>
        <Route path='profile' element={<ProfileCheck><Profile /></ProfileCheck>} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </AuthProvider>   
  );
}

export default App;
