import React from 'react'
import {useNavigate, NavLink} from 'react-router-dom'

const linkStyles = {
    padding: "15px 20px 15px 20px",
    margin: "10px 10px 10px 10px",
    textDecoration: "none",
    color: "black",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "0px 17px 0px 17px",
    border: "black",
    
  };

function NavBar({currentUser, setCurrentUser}) {
    const navigate = useNavigate(null);

    function handleLogout () {
        // fetch DELETE session#destroy
        fetch('/api/logout', {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok){
                setCurrentUser(null);
                navigate('/')
            }
        })
    }
    return (
        <div className="nav-bar">
            <NavLink
            to='/'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#00fa9a'
                }
            }}
            >Home</NavLink>

            {!currentUser ? 
           <>

            <NavLink
            to='/login'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#00fa9a'
                }
            }}
            >Login</NavLink>

            <NavLink
            to='signup'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#00fa9a'
                }
            }}
            >Signup</NavLink>

            </>
            :
            <>

            <NavLink
            to='user_profile'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#00fa9a'
                }
            }}
            >Profile</NavLink>

            <NavLink
            to='musicians'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#00fa9a'
                }
            }}
            >Musician List</NavLink>

            {/* <NavLink
            to='instruments'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer',
                hover: {
                    color: '#FF0000'
                }
            }}
            >Instrument List</NavLink> */}
            
            <NavLink
            to='/'
            exact
            style={linkStyles}
            className="nav-bar-route"
            activeStyle={{
                cursor: 'pointer'
            }}
            onClick={handleLogout}
            >Logout</NavLink>

             <div className="welcome-name">
                {/* <h2>Welcome, {currentUser.username}!</h2> */}
            </div>

            </>
            }
            
        </div>
    )
}

export default NavBar
