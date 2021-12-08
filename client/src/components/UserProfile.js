import React from 'react';
// import { Navigate } from 'react-router';
import {useState} from 'react';



function UserProfile({currentUser}) {

    // Update User Information
    const [updateFormData, setUpdateFormData] = useState({
        first_name: "",
        last_name: "",
        instruments: "",
        image_url: "",
        bio: ""
    });

    function handleChange (event) {
        setUpdateFormData({
            ...updateFormData, [event.target.name]: event.target.value,
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        fetch(`/api/update`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateFormData)
        })
        .then(response => {
            if(response.ok) {
              response.json().then(user => currentUser(user))
            }
          })
    }

    // Delete User
    // fetch('/api/me', {
    //     method: "DELETE"
    // })
    //     .then(response => {
    //         if(response.ok)
    //         Navigate('/')
    //     })
// function handleDeleteUser() {

// }

function showMore (e) {
    e.preventDefault()
    let userProfile = document.getElementById(currentUser?.username)
    userProfile.classList.toggle("hidden")
}
    const instrumentsList = currentUser?.instruments.map(instrument => <h3>{instrument.name}</h3>)

    return (
        <>
        <div className="user-profile-container">
            <img src={currentUser?.image_url} alt={currentUser?.username} /> <br />
            <h3>Username: {currentUser?.username}</h3> <br />
            <h3>Name: {currentUser?.first_name} {currentUser?.last_name}</h3> <br />
            <h3>Location: {currentUser?.location}</h3> <br />
            <h3>Instrument List:</h3> 
            {instrumentsList}
            <h3>Bio: {currentUser?.bio}</h3>
            <button onClick={showMore}>Edit bio</button> <br />
            <div className="hidden" id={currentUser?.username}>
                <form onSubmit={handleSubmit}>
            <label>Bio</label>
                <textarea type="text" name="bio" rows={8} onChange={handleChange} value={updateFormData.bio} /> <br/>
                </form>
                <input type="submit"/>
            <button>Delete profile</button>
            </div>
        </div>
    </>
    )
}

export default UserProfile
