import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function MusicianDetails({user}) {
    const [selectedMusician, setSelectedMusician] = useState(null);
    const params = useParams();
    

    useEffect( () => {
        fetch(`api/musicians/${params.id}`)
        .then(response => response.json())
        .then(data => setSelectedMusician(data))
    }, ([params.id]))

    

    return (
        <div className="musician-details">
            <h1>{selectedMusician.user.username}</h1>
        </div>
    )
}

export default MusicianDetails
