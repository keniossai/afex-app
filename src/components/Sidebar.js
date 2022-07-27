import React from 'react'
import styled from 'styled-components'


function Sidebar (){

    return (
        <Aside>
            <Container>
                <div className="overview">
                    <img src="../images/icon.svg" alt="" />
                    <span>Overview</span>
                </div>
                <div className="market">
                    <img src="../images/icon-trade.svg" alt="" />
                    <span>Market</span>
                </div>
                <div className="portfolio">
                    <img src="../images/briefcase.svg" alt="" />
                    <span>Portfolio</span>
                </div>
                <div className="community">
                    <img src="../images/Group 4.svg" alt="" />
                    <span>Community</span>
                </div>
                <div className="reports">
                    <img src="../images/Group 5.svg" alt="" />
                    <span>Reports</span>
                </div>
                <div className="settings">
                    <img src="../images/Group 3.svg" alt="" />
                    <span>Settings</span>
                </div>
            </Container>
        </Aside>
    )
}

export default Sidebar

const Aside = styled.aside`
    position: absolute;
    width: 83px;
    height: 900px;
    background: #fff;
    left: 0px;
    top: 2px;
    z-index: -1;
`
const Container = styled.div`
    justify-content: center;

    .overview{
        position: absolute;
        left: 20.48%;
        right: 19.28%;
        top: 14.86%;
        bottom: 85.55%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #1E1E1E;
        }
    }

    .market{
        position: absolute;
        left: 27.71%;
        right: 26.51%;
        top: 25.36%;
        bottom: 76.95%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #D71E0E;
        }
    }

    .portfolio{
        position: absolute;
        left: 21.69%;
        right: 21.69%;
        top: 35.95%;
        bottom: 68.55%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #1E1E1E;
        }
    }

    .community{
        position: absolute;
        left: 13.25%;
        right: 12.05%;
        top: 45.35%;
        bottom: 60.25%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #1E1E1E;
        }
    }
    .reports{
        position: absolute;
        left: 13.25%;
        right: 12.05%;
        top: 55.35%;
        bottom: 60.25%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #1E1E1E;
        }
    }
    .settings{
        position: absolute;
        left: 13.25%;
        right: 12.05%;
        top: 65.35%;
        bottom: 60.25%;

        img{
            position: relative;
            width: 24px;
            height: 24px;
            top: 0px;
        }

        span{
            position: absolute;
            height: 14px;
            left: 0%;
            right: 0%;
            top: 30px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #1E1E1E;
        }
    }
`