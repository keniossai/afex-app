import React from 'react'
import { Link } from 'react-router-dom'


function Header (){
    return(
        <div className="container">
            <Link to="/welcome">
                <img src="/../images/logo.svg" alt="" />
            </Link>
        </div>
    )
}

export default Header