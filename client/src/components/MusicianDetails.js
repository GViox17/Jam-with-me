import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function MusicianDetails() {
    const [selectedMusician, setSelectedMusician] = useState(null);
    const params = useParams();
    

    useEffect(() => {
        fetch(`api/users/${params.id}`)
        .then(response => response.json())
        .then(data => setSelectedMusician(data))
    }, ([params.id]))

    

    return (
        <div className="musician-details">
            <img src={selectedMusician.image} alt={selectedMusician.name}/>
            <h1>{selectedMusician.name}</h1>
            <p>About {selectedMusician.name}</p>

            
        </div>
    )
}

export default MusicianDetails
