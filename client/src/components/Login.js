import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
// import styled from 'styled-components';

function Login({setCurrentUser}) {
    const navigate = useNavigate();
    // const [errors, setErrors] = useState([])
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange (event) {
        setLoginFormData({
            ...loginFormData, [event.target.name]: event.target.value
        })
    }


    function handleSubmit (event) {
        event.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then(response => 
                response.json()).then(user => {
                    setCurrentUser(user)
                    console.log('after successful post login', user)
                    // redirect to home page
                    navigate('/')
                });
            } 
    //         else {
    //             response.json().then(error => {
    //                 console.log(error.errors)
    //                 setErrors(error.errors)
    //             })
    //         }
    //     });
    // }
    
    return (
        <div>
             <form onSubmit={handleSubmit} className='login-form'>
                <h3>Welcome Back Local Musician!</h3>
                <label>Username</label>
                <input type='text' name="username" value={loginFormData.username} onChange={handleChange} /> <br />
                
                <label>Password</label>
                <input type='password' name='password' value={loginFormData.password} onChange={handleChange}/> <br />

                <input type='submit' />
            </form>


        </div>
    )
}


export default Login
