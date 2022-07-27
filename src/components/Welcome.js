import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Welcome (){
    return(
        <div className="container">
            {/* <img src="../images/logo.svg" alt="" /> */}
            <Card className="card">
                <h1>Sign in to ComX</h1>
                <p>Welcome to ComX</p>
                <Link to="/sign-in" className='sign_in'>Sign in</Link>
            </Card>
            <Register>
                <h1>Create an Account</h1>
                <p>Join the Family</p>
                <Link to="register" className='register'>Sign in</Link>
            </Register>
        </div>
    )
}

export default Welcome

const Card = styled.div`
    position: absolute;
    width: 555px;
    background-color: #fff;
    height: 228px;
    left: 442px;
    top: 190px;
    text-align: center;

    p{
        font-weight: 500;
        font-size: 15px;
    }

    .sign_in{
        position: absolute;
        left: 48px;
        right: 50px;
        top: 60.96%;
        bottom: 18.86%;
        background: #52965E;
        border-radius: 2px;
        padding: 10px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        
    }
`

const Register = styled.div`
    position: absolute;
    width: 555px;
    height: 228px;
    left: 442px;
    top: 450px;
    background: #fff;
    text-align: center;
    
    .register{
        position: absolute;
        left: 48px;
        right: 50px;
        top: 60.96%;
        bottom: 18.86%;
        background: #000;
        border-radius: 2px;
        padding: 10px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }
`

// Write a short story say 3 Paragraph, write the essential things to it
// Read through it and respond to it, what put in memory, make sure it involves your own actions.
// Take the success of one area Job 36: 8

// Frame the confession

// Get into a place you cannot be interrupted
// The default mood is to succeed
