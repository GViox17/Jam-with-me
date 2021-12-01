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

    // sends to sessionscontroller #create method
    function handleSubmit (event) {
        event.preventDefault();
        console.log('inside handlesubmit function, before fetch post', loginFormData)

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

            {/* {!errors ? 
            <div>
                <Wrapper>
                    <Alert>!</Alert>
                    <Message>{errors}</Message>
                </Wrapper>
            </div>
            : null
            }    */}
        </div>
    )
}

// const Wrapper = styled.div`
//     color: red;
//     background-color: mistyrose;
//     border-radius: 6px;
//     display: flex;
//     padding: 8px;
//     align-items: center;
//     gap: 8px;
//     margin: 8px 0;
//     justify-content: center;
// `;

// const Alert = styled.div`
//     background-color: white;
//     height: 30px;
//     width: 30px;
//     border-radius: 50%;
//     font-weight: bold;
//     display: grid;
//     place-content: center;
// `;

// const Message = styled.p`
//     margin: 0;
// `
;


export default Login
