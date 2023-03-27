import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Newregistration() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function setAccount() {
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)

    }

    return (
        <div style={{ marginLeft: 100 }}>
            <h1 style={{ textAlign: 'left' }}>Create New Account</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ text: 'left' }}>Enter UserName</div>
                <div style={{ text: 'left' }}><input type='text' onChange={(e => { setUserName(e.target.value) })} /></div>
                <div style={{ text: 'left' }}>Password</div>
                <div style={{ text: 'left' }}><input type='password' onChange={(e => { setPassword(e.target.value) })} /></div>
                <div><button onClick={setAccount}>Create New Account</button></div>
                <div><NavLink to={'/'} onClick={setAccount}>Back To Login</NavLink></div>

            </div>
        </div>
    )
}

export default Newregistration