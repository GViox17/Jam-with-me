import React from 'react';
import {NavLink} from 'react-router-dom';
import MusicianDetails from './MusicianDetails';
// import MusicianDetails from './MusicianDetails';

function MusicianCard({user}) {

    // Add Musician Likes for Patch??

    
function renderInstruments () {
    return user.instruments.map(instrument => {
        return (
            <h4>{instrument.name}</h4>
        )
    })
}
    return (
        <div className="musician-card">
            <img src={user.image_url} alt={user.username}/> <br />
            <h2>{user.username}</h2><br />
            <h3>{user.location}</h3> <br />
            {renderInstruments()}
            
            <NavLink to={`/musicians/${user.id}`} element={<MusicianDetails user={user} key={user.id} />}>Find out more</NavLink>
           
            
        </div>
    )
}

export default MusicianCard
