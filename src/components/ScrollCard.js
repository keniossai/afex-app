import React from 'react'
import styled from 'styled-components'

function ScrollCard () {
    return (
        <>
            <BuyCard>
                <table class="table_body">
                    <thead>
                        <tr>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th className='theader'>Bid Price</th>
                        </tr>
                    </thead>
                    <tbody className="table_scroll">
                        <tr className='active'>
                        <td>Soybeans (SSBS) </td>
                        <td>2003</td>
                        <td>1736.92</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Paddy Rice (SPRL)</td>
                        <td>11293</td>
                        <td>3627.00 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Maize (SMAZ)</td>
                        <td>1832</td>
                        <td>8294.01</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>29102</td>
                        <td>8192.00</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                    </tbody>
                </table>
            </BuyCard>
            <SellCard>
                <table class="table_body">
                    <thead>
                        <tr>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th className='theader'>Offer Price</th>
                        </tr>
                    </thead>
                    <tbody className="table_scroll">
                        <tr className='active'>
                        <td>Soybeans (SSBS) </td>
                        <td>2003</td>
                        <td>1736.92</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Paddy Rice (SPRL)</td>
                        <td>11293</td>
                        <td>3627.00 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Maize (SMAZ)</td>
                        <td>1832</td>
                        <td>8294.01</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>29102</td>
                        <td>8192.00</td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                        <tr>
                        <td>Fair Trade ETC (FETC) </td>
                        <td>3212</td>
                        <td>1736.92 </td>
                        <button type='submit' className="table_button">Buy</button>
                        </tr>
                    </tbody>
                </table>
            </SellCard>
        </>

    )
}

export default ScrollCard

const BuyCard = styled.div`
    position: absolute;
    width: 554px;
    height: 352px;
    left: 310px;
    top: 245px;
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

    table.table_body td:nth-child(3){
        color: #52965E;
    }

    .table_button{
        position: relative;
        width: 64px;
        height: 24px;
        left: -13px;
        top: 7px;
        background: transparent;
        border: 0.8px solid #52965E;
        border-radius: 2px;
        color: #52965E;
        cursor: pointer;
        z-index: 2;

        :hover{
            background: #52965E;
            color: #fff;
        }
    }

`
const SellCard = styled.div`
    position: absolute;
    width: 554px;
    height: 352px;
    left: 873px;
    top: 245px;
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
    table.table_body td:nth-child(3){
        color: #E55541;
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

