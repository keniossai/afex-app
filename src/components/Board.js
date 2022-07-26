import React from 'react'
import styled from 'styled-components'


function Board(){
    return(
        <BoardLayout>
            <div className="container">
                <h6>Board</h6>
            </div>
        </BoardLayout>
    )
}

export default Board

const BoardLayout = styled.div`
    position: absolute;
    width: 1119px;
    height: 115px;
    left: 308px;
    top: 81px;
    background: #FFFFFF;

    
    h6{
        position: relative;
        left: 35px;
        bottom: 5px;

        /* font-family: 'Roboto'; */
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: right;

        color: #1E1E1E;
    }
    /* .container{
        position: absolute;
        left: 21.39%;
        right: 0.9%;
        top: 7.57%;
        bottom: 80.17%;

        
    } */
`