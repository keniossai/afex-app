import React from 'react'
import styled from 'styled-components'


function Ticktape(){
    return(
        <Ticker>
            <TickerButton>
                Live Market
            </TickerButton>
        </Ticker>
    )
}

export default Ticktape

const Ticker = styled.div`
    position: absolute;
    width: 1541px;
    height: 51px;
    left: 0px;
    top: 885px;
    background: #fff;
    filter: drop-shadow(5px 0px 5px rgba(30, 30, 30, 0.05));

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