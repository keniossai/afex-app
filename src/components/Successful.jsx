import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function UserValidation (){

    return (
        <div className='container'>
            <ValidateCard>
                <img src="/../images/success.png" alt="" />
                <h1>Registration Complete</h1>
                <p>Dear [fName]. Your registration is now complete.
You  may proceed to your dashboard and start trading commodities.</p>
                <Link to="/dashboard/market/order-book">go to dashboard</Link>
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
    top: 650px;

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
        position: absolute;
        height: 16px;
        left: -0.64%;
        right: 1.4%;
        bottom: 60px;

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

    img{
        position: relative;
        width: 273px;
        height: 273px;
        /* left: 583px; */
        top: 87px;
    }

    h1{
        position: relative;
        height: 35px;
        top: 84px;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 0.2px;
        color: #1B1E24;
    }

    p{
        position: absolute;
        left: 12.61%;
        right: 8.47%;
        top: 73.16%;
        bottom: 21.05%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        text-align: center;

        color: #252631;
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