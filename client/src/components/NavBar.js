import React from 'react'
import {useNavigate, NavLink} from 'react-router-dom'

const linkStyles = {
    padding: "10px 15px 10px 15px",
    margin: "10px 10px 10px 10px",
    textDecoration: "none",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "0px 17px 0px 17px",
  };

function NavBar({currentUser, setCurrentUser}) {
    const navigate = useNavigate();

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
                    color: '#FF0000'
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
                    color: '#FF0000'
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
                    color: '#FF0000'
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
                    color: '#FF0000'
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
                    color: '#FF0000'
                }
            }}
            >Musician List</NavLink>

            <NavLink
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
            >Instrument List</NavLink>
            
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
                <h2>Welcome, {currentUser.username}!</h2>
            </div>

            </>
            }
            
        </div>
    )
}

export default NavBar
