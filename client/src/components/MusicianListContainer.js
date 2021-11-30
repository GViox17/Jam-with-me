import React, {useState, useEffect} from 'react'
import MusicianCard from './MusicianCard'
import NewInstrumentForm from './NewInstrumentForm';

function MusicianListContainer({currentUser}) {
    const [user ,setUser] = useState([]);
    // const [filteredCategory, setFilteredCategory] = useState("All");

    useEffect(() => {
        fetch("/api/users")
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])

    function renderMusicianCards () {
        return (user.map((user) => {
        return ( <MusicianCard
            key={user.id} 
            user={user}/>
        )
        }))
    }



    return (
    <div>
        <div className="heading">
            <h1>Future Collaborators Here!</h1>
        </div>
        <div className="card-container">
            <NewInstrumentForm currentUser={currentUser} />
             {renderMusicianCards()}
        </div>
    </div>
    )
}

export default MusicianListContainer;
