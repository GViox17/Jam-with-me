import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home";
import Instruments from "./Instruments";
import Login from "./Login";
import Signup from "./Signup";
import MusicianListContainer from "./MusicianListContainer";
import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
import MusicianDetails from "./MusicianDetails";



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("TEST");
    fetch('/api/me')
    .then(response => {
      if(response.ok) {
        response.json().then(user => setCurrentUser(user))
      }
    })
  }, [])



  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route exact path="/musicians" element={<MusicianListContainer currentUser={currentUser}/>}/>
  
        <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser} />}/>

        <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}/>

        <Route exact path="/user_profile" element={<UserProfile currentUser={currentUser} />}/>

        <Route exact path="/musicians/:id" element={<MusicianDetails currentUser={currentUser}/>} />
    
        <Route exact path="/instruments/:id" element={<Instruments currentUser={currentUser} />}/>

    </Routes>
    </div>
  );
}

export default App;
