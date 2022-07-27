import React from 'react'
import styled from 'styled-components'


function Tradelog (){

    return (
        <Trade>
            <table class="table_body">
                    <thead>
                        <tr>
                        <th>Security</th>
                        <th>Board</th>
                        <th>Order Type</th>
                        <th>Matched Price</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className="table_scroll">
                        <tr className='active'>
                        <td>Soybeans (SSBS) </td>
                        <td>X-Traded</td>
                        <td>Buy</td>
                        <td>1736.92</td>
                        <td>1736.92</td>
                        <td>17 Oct, 2020</td>
                        <td>07:38</td>
                        
                        </tr>
                        <tr>
                        <td>Paddy Rice (SPRL)</td>
                        <td>X-Traded</td>
                        <td>Buy</td>
                        <td>3627.00 </td>
                        <td>3627.00 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Maize (SMAZ)</td>
                        <td>OTC</td>
                        <td>Sell</td>
                        <td>8294.01</td>
                        <td>8294.01</td>
                        <td>17 Oct, 2020</td>
                        <td>07:38</td>
                        
                        </tr>
                        <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>FI</td>
                        <td>Buy</td>
                        <td>8192.00</td>
                        <td>8192.00</td>
                        <td>17 Oct, 2020</td>
                        <td>07:38</td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>OTC</td>
                        <td>Sell</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>Trade-X</td>
                        <td>Buy</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>FI</td>
                        <td>Sell</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>1736.92 </td>
                        <td>17 Oct, 2020 </td>
                        <td>07:38 </td>
                        
                        </tr>
                    </tbody>
                </table>
        </Trade>
    )
}

export default Tradelog


const Trade = styled.div`
    position: absolute;
    width: 1120.01px;
    height: 300px;
    left: 310px;
    top: 607px;
    background: #fff;
    overflow: hidden;
    overflow-y: scroll;

    table.table_body {
        width: 100%;
    }
    
    
    .active{
        background: #F8FAFB;
        height: 42px;
        width: 312px;
    }

    table.table_body th {
        text-align: left;
        border-bottom: 1px solid #f5f3fd;
        padding: 10px 25px;
        font-weight: bold;
        color: #778CA2;
        font-size: 12px;
        
        
    }

    table.table_body td{
        text-align: left;
        padding: 10px 25px;
        color: #000;
        font-weight: bold;
        font-size: 12px;
        border-bottom: 1px solid #f5f3fd;
    }

    .table_button{
        position: relative;
        width: 64px;
        height: 24px;
        left: -13px;
        top: 7px;
        background: transparent;
        border: 0.8px solid #E55541;
        border-radius: 2px;
        color: #E55541;
        cursor: pointer;
        z-index: 2;

        :hover{
            background: #E55541;
            color: #fff;
        }
    }
`