import { Button, TextField, Form } from "../../common";
import React, {FC, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { login, logout } from "../../../actions/AuthActions";
import { Alert } from "antd";

const Login: FC<any> = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector((state: any) => state.auth)
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(logout())
    }, [])

    useEffect(() => {
      if (auth.isLoggedin) {
        navigate("/")
      }
    }, [auth, navigate])

    const handleSubmit = () => {
        dispatch(login(username, password))
    }

    return (
        <Form>
            { auth.error && <Alert type="error" message="Login failed"/>}
            <TextField id='username' placeholder="Username" value={username} onChange={(e: any) => setUsername(e.target.value)}/>
            <TextField id='password' placeholder="Password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
            <Button id='login' text="Submit" onClick={handleSubmit}/>
        </Form>
    )
}

export default Login;