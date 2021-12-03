import React from 'react';
// import {useState, useEffect} from 'react-router-dom';



function UserProfile({currentUser}) {
    console.log(currentUser)


    const instrumentsList = currentUser?.instruments.map(instrument => <h6>{instrument.name}</h6>)

    return (
        <>
        <div className="user-profile-container">
            <img src={currentUser?.image_url} alt={currentUser?.username} /> <br />
            <h3>Username: {currentUser?.username}</h3> <br />
            <h3>Name: {currentUser?.first_name} {currentUser?.last_name}</h3> <br />
            <h3>Location: {currentUser?.location}</h3> <br />
            <h3>Instrument List</h3> 
            {instrumentsList}
            <h3>Bio:</h3>
            <button>Edit bio</button> <br />
            <h3>Delete Profile</h3> 
            <button>Delete profile</button>
        </div>
    </>
    )
}

export default UserProfile
