import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Signin (){
    return (
        <div className='container'>
            <SigninCard>
                <h1>Sign in to ComX</h1>
                <p>Enter your login credentials below.</p>
                <form action="">
                    <div className="form-group">
                        <label className='form_label' htmlFor="email">Your email</label>
                        <input className='email' type="email" name="email" id="" placeholder='Enter your email' />
                    </div>
                    <div className="form-group">
                        <label className='password' htmlFor="password">Your password</label>
                        <input className='password_field' type="password" name="password" placeholder='*******' id="" />
                    </div>
                    <div className="form-group">
                        <input className='checkbox' type="checkbox" name="checkbox" value="Boat" />
                        <label className='stay_signin' htmlFor="check"> Stay Signed in</label>
                        <Link className="password_for" to="/password-reset/otp-validation">Forgot password?</Link>
                    </div>
                    <Link to="/dashboard/market/order-book" className="form_button">Sign in</Link>
                    <Link className='btn_back' to="/welcome">Back</Link>
                </form>
            </SigninCard>
        </div>
    )
}

export default Signin

const SigninCard = styled.div`
    position: absolute;
    background: #fff;
    width: 555px;
    height: 570px;
    left: 442px;
    top: 151px;
    text-align: center;

    .checkbox{
        position: absolute;
        left: 8.83%;
        right: 87.57%;
        top: 63.51%;
        bottom: 32.98%;
        border: 1px solid #000;
    }

    .password_for{
        position: absolute;
        left: 71.17%;
        right: 8.47%;
        top: 64.04%;
        bottom: 33.16%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #D71E0E;
    }

    .stay_signin{
        position: absolute;
        left: 13.51%;
        right: 70.63%;
        top: 64.04%;
        bottom: 33.16%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #140706;
    }

    .form_label{
        position: absolute;
        left: 8.83%;
        right: 79.1%;
        top: 26.49%;
        bottom: 70.7%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #252631;
    }

    input{
        padding: 0 20px;
        outline: none;
    }

    .email{
        box-sizing: border-box;
        width: 457px;
        height: 50px;
        position: absolute;
        left: 8.83%;
        right: 8.83%;
        top: 31.75%;
        bottom: 59.12%;
        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
    }

    .password{
        position: absolute;
        left: 8.83%;
        right: 74.23%;
        top: 44.39%;
        bottom: 52.81%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #252631;
    }

    .password_field{
        box-sizing: border-box;
        width: 457px;
        height: 50px;
        position: absolute;
        left: 8.83%;
        right: 0;
        top: 49%;
        bottom: 41.23%;
        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
    }

    .form_button{
        position: absolute;
        left: 8.83%;
        right: 8.83%;
        top: 72.46%;
        bottom: 19.47%;
        display: block;
        background: #52965E;
        border-radius: 2px;
        width: 457px;
        box-sizing: border-box;
        border: none;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        cursor: pointer;
        padding: 10px;
    }

    .btn_back{
        position: absolute;
        left: 8.83%;
        right: 8.83%;
        top: 84.04%;
        bottom: 7.89%;
        background: #F8FAFB;
        border-radius: 2px;
        padding: 14px 0px;
        color: #1E1E1E;
        font-weight: 700;
        font-size: 14px;
    }
`