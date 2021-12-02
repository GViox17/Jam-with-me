import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

function Login({setCurrentUser}) {
    const navigate = useNavigate();
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
                    navigate('/user_profile')
                });
            } 
    //         else {
    //             response.json().then(error => {
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
