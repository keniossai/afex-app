import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Register (){
    return (
        <div className='container'>
            <RegisterCard>
                <h1>Register new account</h1>
                <p>Sign up for an account and start trading today</p>
                <span>Select select the category that best describes you</span>
                    <Link to="" className='dark_btn'>Individual</Link>
                    <Link to="" className='white_btn'>Corperate</Link>
                <form action="" method="post">
                    <div className="form_card">
                        <label htmlFor="">Your First Name</label>
                        <input className='first_name' type="text" name="name" placeholder='Enter your first name' />
                        <label className='last_name_label' htmlFor="">Your Last Name</label>
                        <input className='last_name' type="text" name="name" placeholder='Enter your last name' />
                    </div>
                    <div className="email_card">
                        <label htmlFor="">Your Email</label>
                        <input className='email_input' type="text" name="name" placeholder='Enter your first name' />
                    </div>
                    <button type="submit" className='next_btn'>Next Step</button>
                </form>
            </RegisterCard>
        </div>
    )
}

export default Register

const RegisterCard = styled.div`
    position: absolute;
    background: #fff;
    width: 555px;
    height: 570px;
    left: 442px;
    top: 151px;
    text-align: center;

    .switch_button{
        display: flex;
        padding: 20px;
        width: 300px;

    }
    .dark_btn{
        box-sizing: border-box;
        position: absolute;
        height: 52px;
        left: 39px;
        right: 68.05%;
        top: 180px;
        padding: 15px;
        color: #fff;
        background: #262626;
        border: 1px solid #E8ECEF;
        border-radius: 2px;

        :hover{
            background: #fff;
            color: #000;
        }
    }
    .white_btn{
        box-sizing: border-box;
        position: absolute;
        height: 52px;
        left: 34.14%;
        right: 33.92%;
        top: 180px;
        padding: 15px;
        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
        width: 150px;
        color: #000;

        :hover{
            background: #000;
            color: white;
        }
    }

   span{
    position: absolute;
    width: 309px;
    height: 16px;
    left: 0px;
    top: 140px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding: 20px;
    color: #1E1E1E;
   }

   .form_card{
    position: absolute;
    width: 457px;
    height: 84px;
    bottom: 226px;
    text-align: left;

    .last_name_label{
        position: relative;
        left: -45px;
    }

    label{
        position: relative;
        width: 101px;
        height: 16px;
        left: 40px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1E1E1E;
    }

    .first_name{
        box-sizing: border-box;
        width: 230px;
        position: relative;
        height: 52px;
        left: -50px;
        padding: 0px 10px;
        top: 42px;

        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
    }

    .last_name{
        box-sizing: border-box;
        width: 230px;
        position: absolute;
        height: 52px;
        left: 60.3%;
        right: -0.11%;
        top: 42px;
        padding: 0px 10px;

        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
    }
   }

   .email_card{
    position: absolute;
    width: 457px;
    height: 84px;
    left: -130px;
    bottom: 110px;

    label{
        position: absolute;
        width: 101px;
        height: 16px;
        left: 150px;
        top: 70;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1E1E1E;
    }

        .email_input{
            box-sizing: border-box;
            width: 470px;
            position: absolute;
            height: 52px;
            left: 170px;
            padding: 0px 10px;
            top: 32px;
            background: #FFFFFF;
            border: 1px solid #E8ECEF;
            border-radius: 2px;
        }
   }
   .next_btn{
    position: absolute;
    width: 132px;
    height: 46px;
    left: 214px;
    top: 480px;
    background: transparent;
    border: none;
    cursor: pointer;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.3px;
text-transform: uppercase;

color: #D71E0E;
   }
`