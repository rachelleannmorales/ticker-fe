import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { Layout } from 'antd';
import { getAccessToken, getRefreshToken } from '../services/AuthService';
import { useDispatch } from 'react-redux';
import { refreshTokens } from '../actions/AuthActions';
import { useSelector } from 'react-redux';

const App: React.FC<{}> = (props) => {
    const dispatch = useDispatch();
    const isLoggedin = useSelector((state: any) => state.auth.isLoggedin);

    // refresh tokens if access token expires
    useEffect(() => {
        const checkToken = setInterval(() => {
            if (!getAccessToken() && isLoggedin && getRefreshToken()) {
                dispatch(refreshTokens())
            } 
        }, 60000)
    
      return () => {
        clearInterval(checkToken);
      }
    }, [isLoggedin, dispatch])

  return (
    <Layout style={{height:"100vh"}}>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={ <Dashboard/>} />
        </Routes>
    </Layout>
  );
};

export default App;