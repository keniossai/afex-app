import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdOutlineLightMode } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineRight } from 'react-icons/ai'
import Sidebar from './Sidebar'
import SubMenu from './SubMenu'
import Board from './Board'
import ScrollCard from './ScrollCard'
import Ticktape from './Tickertape'
import Tradelog from './Tradelog'


function Dashboard(){
    return(
        <Container>
            <Header>
                <Logo>
                    <Link to="/welcome">
                        <img src="/../images/logo.svg" alt="" />
                    </Link>
                </Logo>
                <RightContainer>
                    <DarkMode><span>Light</span> <div className="oval"><MdOutlineLightMode className='icon' /></div></DarkMode>
                    <div className="line"></div>
                    <AiOutlineRight className="chev" />
                    <NavAmount>
                        <div className="cash_balance">
                            <span className="cash_label">Cash Balance</span>
                            <h4><span className="naira">₦</span>8,374,763</h4>
                        </div>
                        <div className="security_value">
                            <span className='cash_label'>SECURITIES VALUE</span>
                            <h4><span className="naira">₦</span>8,374,763</h4>
                        </div>
                        <div className="loan_balance">
                            <span className="cash_label">Loan Balance</span>
                            <h4><span className="naira">₦</span>8,374,763</h4>
                        </div>
                    </NavAmount>
                </RightContainer>
                    <Demo>Demo</Demo> <BiChevronDown className="down_icon" />
            </Header>
            <Sidebar />
            <SubMenu />
            <Board />
            <ScrollCard />
            <Tradelog />
            <Ticktape />
        </Container>
    )
}

export default Dashboard

const Container = styled.div`
    width: 1440px;
    height: 700px;
    overflow: hidden;
`

const Header = styled.nav`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 76px;
    bottom: 0%;
    border-bottom: 1px solid #EDEDED;
    background: #FFFFFF;

    .down_icon{
        position: absolute;
        left: 96.89%;
        right: 0.83%;
        top: 36.56%;
        bottom: 35.95%;
    }
`

const Logo = styled.div`
    position: absolute;
    left: 1.04%;
    right: 91.11%;
    top: 4.69%;
    bottom: 3.12%;
    
`

const RightContainer = styled.div`
    position: absolute;
    left: 49.01%;
    right: 46.69%;
    top: 26.56%;
    bottom: 25%;
    display: flex;

    .chev{
        position: absolute;
        left: 120px;
        /* right: -30%; */
        align-items: center;
        margin-left: 70%;
        top: 10px;
        bottom: 31.25%;
        display: flex;
        /* width: 10px; */
        color: #333333;
        /* border: 0.3px solid #333333; */
        /* transform: rotate(180deg); */
    }
    
    
    
`
const DarkMode = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    padding: 5px 10px ;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 67px;
    height: 32px;
    background: #F4F4F6;
    border-radius: 100px;

    ::after{
        content: "";
        display: block;
        position: absolute;
        left: 56px;
        bottom: -15px;
        margin-left: 90px;
        height: 75px;
        border: 1px solid #EDEDED;
    }
    

    span{
        position: absolute;
        /* height: 8px; */
        left: 12.9%;
        right: 54.84%;
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 11px;
        line-height: 8px;
        text-transform: uppercase;

        color: #1E1E1E;
    }

    .oval{
        position: absolute;
        left: 60.23%;
        right: 9.21%;
        height: 30px;
        width: 30px;
        top: 11.68%;
        bottom: 9.68%;
        border-radius: 100%;
        background: #FFFFFF;

        .icon{
            position: absolute;
            /* width: 12.98px;
            height: 13px; */
            left: 6.95px;
            top: 8px;
        }
    }

`
const NavAmount = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 180px;
    bottom: -40px;

    ::after{
        content: "";
        /* display: block; */
        position: relative;
        left: 36px;
        top: -15px;
        margin-left: 10px;
        height: 75px;
        border: 1px solid #EDEDED;
    }

    .cash_balance{
        width: 120px;
        h4{
            position: relative;
            left: 5px;
            right: 32px;
            bottom: 20px;
            font-weight: bold;
            font-size: 16px;
            color: #1E1E1E;

            span{
                font-size: 13px;
            }
        }
        .cash_label{
        position: relative;
        left: 5px;
        right: 32px;
        font-family: 'Roboto';
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        color: #778CA2;
        }
    }

    .security_value{
        width: 120px;
        h4{
            position: relative;
            left: 5px;
            right: 32px;
            bottom: 20px;
            font-weight: bold;
            font-size: 16px;
            color: #1E1E1E;

            span{
                font-size: 13px;
            }
        }
        .cash_label{
        position: relative;
        left: 5px;
        right: 32px;
        font-family: 'Roboto';
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        color: #778CA2;
        }
    }

    .loan_balance{
        width: 120px;


        h4{
            position: relative;
            left: 5px;
            right: 32px;
            bottom: 20px;
            font-weight: bold;
            font-size: 16px;
            color: #1E1E1E;

            span{
                font-size: 13px;
            }
        }
        .cash_label{
        position: relative;
        left: 5px;
        right: 32px;
        font-family: 'Roboto';
        font-weight: 500;
        text-transform: uppercase;
        font-size: 12px;
        color: #778CA2;
        }

        
    }
`

const Demo = styled.button`
    position: absolute;
    left: 92.44%;
    right: 2.22%;
    top: 32.81%;
    bottom: 35.94%;
    color: #fff;
    background: #1E1E1E;
    border: none;
    padding: 0px 10px;
    text-transform: uppercase;
`