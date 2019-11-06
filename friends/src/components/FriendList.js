import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    const login = e =>{
        e.preventDefault();
        axiosWithAuth().post(`/login`, credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friendsPage')
            })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit = {login}>
                <input 
                  type = 'text'
                  name = 'username'
                  placeholder = 'Username'
                  value = {credentials.username}
                  onChange ={handleChange}
                />
                <input 
                  type = 'password'
                  name = 'password'
                  placeholder = 'Password'
                  value = {credentials.password}
                  onChange ={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login