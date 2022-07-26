import React from 'react'
import { Link } from 'react-router-dom'


function Header (){
    return(
        <div className="container">
            <Link to="/">
                <img src="../images/logo.svg" alt="" />
            </Link>
        </div>
    )
}

export default Header