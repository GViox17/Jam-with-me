import React from 'react'

function UserProfile({currentUser}) {
    return (
        <div  >

        <>
        <div className="user-profile-container">
            <h2>Who you be :</h2>
            <img src={currentUser.image_url} alt={currentUser.username} /> 
            <h3>Username: {currentUser.username}</h3>
            <h3>First Name: {currentUser.first_name}</h3>
            <h3>Last Name: {currentUser.last_name}</h3>
            <h3>Location: {currentUser.location}</h3>
            <h3>Instrument: {currentUser.instrument}</h3> <br />
        </div>
    </>
        </div>
    )
}

export default UserProfile
