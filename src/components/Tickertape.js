import React from 'react'
import styled from 'styled-components'


function Ticktape(){
    return(
        <Ticker>
            <TickerButton>
                Live Market
            </TickerButton>
            <Tape>
                <div className="ticker">
                    <h6>Soybean (SBBS)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Sorghum (SSGM)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Soybean (SBBS)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Maize (SMAZ)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Paddy Rice (SPRL)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Cocoa (SCOC)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Cocoa (SCOC)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Cocoa (SCOC)</h6>
                    <span>₦30,834.59</span>
                </div>
                <div className="ticker">
                    <h6>Cocoa (SCOC)</h6>
                    <span>₦30,834.59</span>
                </div>
            </Tape>
        </Ticker>
    )
}

export default Ticktape

const Ticker = styled.div`
    position: absolute;
    width: 100%;
    height: 51px;
    left: 0px;
    top: 885px;
    background: #fff;
    filter: drop-shadow(5px 0px 5px rgba(30, 30, 30, 0.05));
    overflow-y: hidden;
`

const TickerButton = styled.button`
    position: absolute;
    left: 0%;
    right: 89.36%;
    top: 0%;
    bottom: 0%;
    color: #fff;
    background: #000000;
    text-align: center;
    border: none;
    padding:10px 30px;
    font-weight: bold;
    font-size: 16px;
`
const Tape = styled.div`
    display: flex;
    position: relative;
    top: -30px;
    left: 170px;
    overflow: hidden;

    .ticker{
        margin: 0px 20px;
        text-align: left;

        h6{
            position: relative;
            top: 4px;
            font-size: 14px;
            
        }
        span{
            position: absolute;
            bottom: 10px;
            font-size: 14px;
        }
    }
`