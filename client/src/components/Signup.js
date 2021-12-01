import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
// import styled from 'styled-components';

function Signup({setCurrentUser}) {
    // const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        location: "",
        instruments: "",
        username: "",
        password: "",
        password_confirmation: "",
        image_url: ""
        // bio: ""

    });

    function handleChange (event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log('inside handlesubmit, prior to actually fetch posting', formData);

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => 
            
                response.json()).then(data => {
                    console.log('data response after fetch post!', data)
                    setCurrentUser(data)
                    navigate('/user_profile')
                })
            } 
    //         else {
    //             response.json().then(errors => {
    //                 console.log(errors)
    //                 setErrors(errors.errors)
    //             })
    //         }
    //     })
    // }

    return (
        <div>
            
                <form className="signup-form" onSubmit={handleSubmit}>

                <h3>Welcome Young Musician!</h3>

                <label>First Name</label>
                <input type="text" name="first_name" onChange={handleChange} value={formData.first_name} /> <br/>

                <label>Last Name</label>
                <input type="text" name="last_name" onChange={handleChange} value={formData.last_name} /> <br/>

                <label>Location (City, State)</label>
                <input type="text" name="location" onChange={handleChange} value={formData.location} /> <br/>

                <label>Instrument</label>
                <input type="text" name="instruments" onChange={handleChange} value={formData.instruments.name} /> <br/>

                <label>Profile Picture (Image URL)</label>
                <input type="text" name="image_url" onChange={handleChange} value={formData.image_url} /> <br/>

                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} value={formData.username} /> <br/>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} value={formData.password} /> <br/>

                <label>Re-Enter Password</label>
                <input type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} /> <br/>

                {/* <label>Add Bio/ Music links here!</label>
                <input type="text" name="bio" placeholder="bio" rows={5} value={formData.bio}onChange={handleChange}/> */}

                <input type="submit"/>
            </form>

            {/* {!errors ?
                errors.map(error => {
                    return (
                        <div>
                            <Wrapper>
                                <Alert>!</Alert>
                                <Message>
                                    {error}
                                </Message>
                            </Wrapper>
                        </div>
                    );
                })
                : null
            } */}
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
// `;

export default Signup
