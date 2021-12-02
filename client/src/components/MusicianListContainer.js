import React, {useState, useEffect} from 'react'
import MusicianCard from './MusicianCard'
import SearchBar from "./SearchBar";


function MusicianListContainer() {
    const [users ,setUsers] = useState([]);
    const [searchForm, setSearchForm] = useState('');

    useEffect(() => {
        fetch("/api/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])


    function handleChange(event) {
            setSearchForm(event.target.value);
        }
    function renderMusicianCards () {  
        return (
            users
            .filter((user) =>  user.instruments.some(instrument => instrument.name.toLowerCase().includes(searchForm.toLowerCase())))
            .map(user => 
             <MusicianCard
            key={user.id} 
            user={user}
            />
        ))
    }



    return (
    <div>
        <div className="heading">
            <h1>Future Collaborators Here!</h1>
            <SearchBar handleChange={handleChange} searchForm={searchForm}/>
        </div>
        <div className="card-container">
             {renderMusicianCards()}
             
        </div>
    </div>
    )
}

export default MusicianListContainer;
