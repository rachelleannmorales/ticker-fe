import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../services/AuthService';

const requireAuth = (Component: any) => {
  const Wrapper = () => {
      const navigate = useNavigate();
      const isLoggedIn = getAccessToken()
      useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login")
        }
      }, [navigate, isLoggedIn]);

      return <Component />;
  }
    return Wrapper;
}

export default requireAuth;
