import React from 'react';

function MusicianCard({user}) {
    
function renderInstruments () {
    return user.instruments.map(instrument => {
        return (
            <h4>{instrument.name}</h4>
        )
    })
}
function showMore (e) {
    e.preventDefault()
    let musicianCard = document.getElementById(user.username)
    musicianCard.classList.toggle("hidden")

}
    return (
        <div className="musician-card">
            <img src={user.image_url} alt={user.username}/> <br />
            <div className="card-text">   
            <h2>{user.username}</h2><br />
            <h3>{user.location}</h3> <br />
            {renderInstruments()}
            <button onClick={showMore}>Find out more</button>

           <div className="hidden" id={user.username}>
            <h5>{user.first_name} {user.last_name}</h5>
            <h5>{user.bio}</h5>
           </div>
            </div>
            
        </div>
    )
}

export default MusicianCard
