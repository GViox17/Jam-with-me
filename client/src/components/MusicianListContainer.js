import React, {useState, useEffect} from 'react'
import MusicianCard from './MusicianCard'
// import NewInstrumentForm from './NewInstrumentForm';
import SearchBar from "./SearchBar";


function MusicianListContainer({}) {
    const [users ,setUsers] = useState([]);
    const [searchForm, setSearchForm] = useState('');
    // const [filteredCategory, setFilteredCategory] = useState("All");

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
            // users.filter((user) => {return user.instruments.name.toLowerCase().includes(searchForm.toLowerCase())
            // }).
            users.map(user => {
                // const musician_id = user.find()
        return ( <MusicianCard
            key={user.id} 
            user={user}
            />
        )
        }))
    }



    return (
    <div>
        <div className="heading">
            <h1>Future Collaborators Here!</h1>
            <SearchBar handleChange={handleChange} searchForm={searchForm}/>
        </div>
        <div className="card-container">
            {/* <NewInstrumentForm currentUser={currentUser} /> */}
             {renderMusicianCards()}
             
        </div>
    </div>
    )
}

export default MusicianListContainer;
