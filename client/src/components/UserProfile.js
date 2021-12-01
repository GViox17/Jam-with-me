import React from 'react';
// import {useState, useEffect} from 'react-router-dom';



function UserProfile({currentUser}) {

//give user option to delete profile    
// function deleteUser() {
//     fetch('/api/logout', {
//         method: "DELETE"
//     })
//     .then(response =>{
//         if (repo)
//     })
// }



    return (
        <>
        <div className="user-profile-container">
            <img src={currentUser.image_url} alt={currentUser.username} /> <br />
            <h3>Username: {currentUser.username}</h3> <br />
            <h3>First Name: {currentUser.first_name}</h3> <br />
            <h3>Last Name: {currentUser.last_name}</h3> <br />
            <h3>Location: {currentUser.location}</h3> <br />
            <h3>Instruments: {currentUser.instruments}</h3> <br />
            {/* <h3>Bio: {currentUser.bio}</h3> */}
        </div>
    </>
    )
}

export default UserProfile
