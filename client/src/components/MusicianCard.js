import React from 'react'

function MusicianCard({user}) {

    return (
        <div className="musician-card">
            <img src={user.image} alt={user.username}/>
            <h2>{user.username}</h2>
            <h3>{user.location}</h3>

            
        </div>
    )
}

export default MusicianCard
