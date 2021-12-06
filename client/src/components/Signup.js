import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

function Signup({setCurrentUser}) {
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
    });

    function handleChange (event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }

function handleSubmit (event) {
    event.preventDefault();

    fetch('/api/signup', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setCurrentUser(data)
                    navigate('/')
                })
            } else {
                response.json().then(error => {
                    console.log(error)
                    alert(error.errors)
                })
            }
        })
            } 

    return (
        <div>
                <form className="signup-form" onSubmit={handleSubmit}>

                <h3>Welcome Young Musician!🎵🎵</h3>

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

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Signup
