import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Login (){
    return (
        <div className='container'>
            <LoginCard>
                <h1>Register new account</h1>
                <p>Sign up for an account and start trading today</p>
                <form action="" method="post">
                    <div className="email_card">
                        <label htmlFor="">Password</label>
                        <input className='email_input' type="text" name="name" placeholder='Enter your first name' />
                    </div>
                    <div className="password_card">
                        <label htmlFor="">Confirm Password</label>
                        <input className='password_input' type="password" name="password" placeholder='********' />
                    </div>
                    <div className="form_card">
                        <label htmlFor="">Phone Number</label>
                        <select name="Phone" className='phone' id="">
                            <option value="">+234</option>
                            <option value="">+1</option>
                            <option value="">+23</option>
                            <option value="">+212</option>
                            <option value="">+222</option>
                            <option value="">+321</option>
                        </select>
                        <label className='last_name_label' htmlFor="">Phone</label>
                        <input className='phone_number' type="text" name="name" placeholder='Enter your phone number' />
                    </div>
                    <Link to="/register/individual/otp-verification" className='next_btn'>Verify Account</Link>
                </form>
            </LoginCard>
            <div class="row">
                <div class="border">
                    <Stepper class="wrapper-progressBar">
                <span>3/4</span>
                    <ul class="progressBar">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li></li>
                    </ul>
                    </Stepper>
                </div>
            </div>
        </div>
    )
}

export default Login

const Stepper = styled.div`
    position: relative;
    width: 808px;
    height: 12px;
    left: 372px;
    top: 700px;

    span{
        position: relative;
        left: -50px;
        top: 10px;
    }

.progressBar li {
    list-style-type: none;
    float: left;
    width: 20%;
    position: relative;
    text-align: center;
}

.progressBar li:before {
    content: " ";
    line-height: 30px;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: 1px solid #ddd;
    border-left:none;
    display: block;
    text-align: center;
    margin: 8.5px auto 0px;
    background-color: #eee;
}
.progressBar li:after {
    content: "";
    position: absolute;
    width: 97%;
    height: 2px;
    background-color: #eee;
    border: 1px solid #ddd;
    border-right:none;
    top: 15px;
    left: -50%;
    z-index: -1;
}

.progressBar li:first-child:after {
    content: none;
}

.progressBar li.active {
    color: #D71E0E;
}

.progressBar li.active:before {
    border-color: #D71E0E;
    background-color: #D71E0E;
}

.progressBar .active:after {
    background-color: #D71E0E;
}
`

const LoginCard = styled.div`
    position: absolute;
    background: #fff;
    width: 555px;
    height: 570px;
    left: 442px;
    top: 151px;
    text-align: center;

    input{
        outline: none;
    }

    p{
        font-size: 15px;
    }

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
        color: #000;
        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;

        :hover{
            background: #000;
            color: #fff;
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
        background: #262626;
        
        border: 1px solid #E8ECEF;
        border-radius: 2px;
        width: 150px;
        color: #fff;

        :hover{
            background: #fff;
            color: #000;
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
    top: 336px;
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

    .phone{
        box-sizing: border-box;
        width: 130px;
        position: relative;
        height: 52px;
        left: -45px;
        padding: 0px 10px;
        top: 42px;

        background: #FFFFFF;
        border: 1px solid #E8ECEF;
        border-radius: 2px;
    }

    .phone_number{
        box-sizing: border-box;
        width: 330px;
        position: absolute;
        height: 52px;
        left: 39.1%;
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
    width: 450px;
    height: 84px;
    left: -130px;
    top: 150px;

    label{
        position: absolute;
        width: 101px;
        height: 16px;
        left: 155px;
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
   .password_card{
    position: absolute;
    width: 450px;
    height: 84px;
    left: -130px;
    top: 250px;

    label{
        position: absolute;
        width: 121px;
        height: 16px;
        left: 165px;
        top: 70;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1E1E1E;
    }

        .password_input{
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
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #D71E0E;
   }
`