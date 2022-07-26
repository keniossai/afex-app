import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function PasswordReset (){
    return (
        <div className='container'>
            <SigninCard>
                <h1>Password Reset</h1>
                <p>Reset your password to continue trading on ComX</p>
                <form action="" method="post">
                    <div className="form-group">
                        <label className='input_label' htmlFor="">Enter the Email Address you registered with</label>
                        <input type="email" name="email" id="" placeholder="Enter your email "/>
                    </div>
                    <p className="otp_note">Note that you’ll be sent an OTP to the email address provided</p>
                    <Link className="back_link" to="/sign-in">Back</Link>
                    <Link className='proceed' to="">Proceed</Link>
                </form>
            </SigninCard>
        </div>
    )
}

export default PasswordReset

const SigninCard = styled.div`
    position: absolute;
    background: #fff;
    width: 555px;
    height: 570px;
    left: 442px;
    top: 151px;

    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #252631;
    }

    .input_label{
        position: absolute;
        left: -10px;
        right: 79.1%;
        top: 34.49%;
        bottom: 70.7%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #252631;
        width: 367px;
    }
    
    
    input{
        box-sizing: border-box;
        width: 457px;
        height: 50px;
        position: absolute;
        left: 8.83%;
        right: 8.83%;
        top: 38.75%;
        bottom: 59.12%;
        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
        padding: 0 10px;
        outline: none;
    }

    .otp_note{
        position: relative;
        top: 168px;
        text-align: center;
        color: rgba(152, 169, 188, 0.8);
    }

    .back_link{
        position: absolute;
        height: 16px;
        left: 2.56%;
        right: 76%;
        top: calc(90% - 16px/2);

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.3px;
        text-transform: uppercase;

        color: #252631;
    }
   
   .proceed{
    position: absolute;
    height: 16px;
    left: -36%;
    right: 8%;
    top: calc(90% - 16px/2);

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.3px;
    text-transform: uppercase;

    color: #D71E0E;
   }
`