import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccessToken, getRefreshToken } from '../services/AuthService';
import { useDispatch } from 'react-redux';
import { restoreSession } from '../actions/AuthActions';

const requireAuth = (Component: any) => {
  const Wrapper = () => {
      const navigate = useNavigate();
      const isLoggedin = useSelector((state: any) => state.auth.isLoggedin);
      const dispatch = useDispatch();
      useEffect(() => {
        if (!getAccessToken()) {
          navigate("/login")
        }
      }, [navigate]);

      useEffect(() => {
        if (getAccessToken() && getRefreshToken()) {
          dispatch(restoreSession())
        }
      }, [navigate, isLoggedin]);

      return <Component />;
  }
    return Wrapper;
}

export default requireAuth;
