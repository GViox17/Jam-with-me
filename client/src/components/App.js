import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home";
import Instruments from "./Instruments";
import Login from "./Login";
import Signup from "./Signup";
import MusicianListContainer from "./MusicianListContainer";
import NavBar from "./NavBar";
import UserProfile from "./UserProfile";
// import NewInstrumentForm from "./NewInstrumentForm";
import MusicianDetails from "./MusicianDetails";



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [user, setUser] = useState()
  // const [instruments, setInstruments] = useState()

  useEffect(() => {
    fetch('/api/me')
    .then(response => {
      if(response.ok) {
        response.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

//  if(!currentUser) {
//     return (
//       <>
//         <Login setCurrentUser={setCurrentUser} />
//       </>
//     )
//   }

  // useEffect(()=> {
  //   fetch('/api/instruments')
  //   .then(response => response.json())
  //   .then(data => setInstruments(data))
  // }, []);

  // function handleInstrumentAddition (newInstrument) {
  //   setInstruments([...instruments, newInstrument]);
  // }

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

        {/* <Route exact path="/instruments/new" element={<NewInstrumentForm onInstrumentAddition={handleInstrumentAddition} currentUser={currentUser}/>} /> */}
       

    </Routes>
    </div>
  );
}

export default App;
