import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function UserValidation (){
    return (
        <div className='container'>
            <ValidateCard>
                <h1>Account details</h1>
                <p>Sign up for an account and start trading today</p>
                <form action="" method="post">
                    <div className="form-group">
                        <label className='input_label' htmlFor="">Enter the 4-digit code that was sent to name@mymail.com</label>
                        <input type="email" name="email" id="" placeholder="Enter code "/>
                    </div>
                    <Link to="" className='resend_link'>Resend Code</Link>
                    <Link to="" className='phone_verify'>Verify via Phone Call</Link>
                    <Link className="back_link" to="/sign-in">Back</Link>
                    <Link className='proceed' to="/register/individual/registration-successful">Proceed</Link>
                </form>
            </ValidateCard>
            <div class="row">
                <div class="border">
                    <Stepper class="wrapper-progressBar">
                <span>3/4</span>
                    <ul class="progressBar">
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                        <li class="active"></li>
                    </ul>
                    </Stepper>
                </div>
            </div>
        </div>
    )
}

export default UserValidation

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
    color: dodgerblue;
}

.progressBar li.active:before {
    border-color: #D71E0E;
    background-color: #D71E0E;
}

.progressBar .active:after {
    background-color: #D71E0E;
}
`
const ValidateCard = styled.div`
    position: absolute;
    background: #fff;
    width: 555px;
    height: 570px;
    left: 442px;
    top: 151px;

    a{
        font-weight: 400;
        font-size: 14px;
        /* line-height: 21px; */
        /* text-align: left; */
    }

    .input_label{
        position: absolute;
        left: 50px;
        right: 79.1%;
        top: 32.49%;
        bottom: 70.7%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #252631;
        width: 427px;
        text-align: left;
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

    .resend_link{
        position: relative;
        top: 168px;
        left: -120px;
        text-align: left;
        color: rgba(152, 169, 188, 0.8);

        :hover{
            color: #D71E0E;
        }
    }
    .phone_verify{
        position: relative;
        top: 190px;
        left: -206px;
        text-align: left;
        color: rgba(152, 169, 188, 0.8);

        :hover{
            color: #D71E0E;
        }
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