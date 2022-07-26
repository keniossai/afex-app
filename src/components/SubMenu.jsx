import React from 'react'
import styled from 'styled-components'

function SubMenu () {
    return (
      <Menu>
            <div className="search">
                <img src="../images/submenu/serch.svg" alt="" />
                <input type="search" className="search_input" placeholder='Search' />
            </div>
        <div className="container">
            <div className="product_preview">
                <img src="../images/submenu/trending-up.svg" alt="" />
                <span>Product View</span>
            </div>
            <div className="order_book">
                <img src="../images/submenu/book.svg" alt="" />
                <span>Order Book</span>
            </div>
            <div className="price_history">
                <img src="../images/submenu/Shape.svg" alt="" />
                <span>Price History</span>
            </div>
            <div className="open_order">
                <img src="../images/submenu/eye.svg" alt="" />
                <span>Open Order</span>
            </div>
            <div className="close_trade">
                <img src="../images/submenu/Shape-1.svg" alt="" />
                <span>Close Trade</span>
            </div>
            <div className="cancel_trade">
                <img src="../images/submenu/x-circle.svg" alt="" />
                <span>Cancelled Trades</span>
            </div>
        </div>
      </Menu>
    )
}

export default SubMenu


const Menu = styled.div`
    position: absolute;
    width: 207px;
    height: 352px;
    left: 92px;
    top: 81px;
    background: #FFFFFF;

    .container{
        position: relative;
        margin-top: 20px;
    }
    .search{
        position: absolute;
        width: 191px;
        height: 27px;
        left: 8px;
        top: 8px;
        background: #F8FAFB;
        border: 1px solid #D6D6D6;
        border-radius: 2px;

        img{
            position: absolute;
            width: 13.14px;
            height: 13px;
            left: 2px;
            top: 7px;
            padding: 0 2px;
        }
        input{
            border: none;
            width: 191px;
            height: 27px;
            padding: 0 20px;
            color: #B3B3B3;
        }
    }

    .product_preview{
        display: flex;
        position: absolute;
        width: 314px;
        height: 16px;
        left: 20px;
        top: 50px;

        img{
            position: relative;
            width: 20px;
            top: 4px;
            padding: 0 10px;
        }

        span{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
        }
    }
    .order_book{
        position: absolute;
        width: 207px;
        height: 50px;
        background: #F8FAFB;
        left: 0px;
        top: 85px;

        

        img{
            position: absolute;
            width: 20px;
            height: 15px;
            right: 147px;
            top: 16px;
            padding: 0 10px;
        }

        span{
            position: relative;
            top: 13px;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
            right: 6px;
        }
    }

    .price_history{
        display: flex;
        position: absolute;
        width: 314px;
        height: 16px;
        left: 20px;
        top: 148px;
        text-align: center;


        img{
            position: relative;
            width: 20px;
            padding: 0 10px;
        }

        span{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
        }
    }
    .open_order{
        display: flex;
        position: absolute;
        width: 314px;
        height: 16px;
        left: 20px;
        top: 198px;
        text-align: center;


        img{
            position: relative;
            width: 20px;
            padding: 0 10px;
        }

        span{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
        }
    }
    .close_trade{
        display: flex;
        position: absolute;
        width: 314px;
        height: 16px;
        left: 20px;
        top: 245px;
        text-align: center;


        img{
            position: relative;
            width: 20px;
            padding: 0 10px;
        }

        span{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
        }
    }
    .cancel_trade{
        display: flex;
        position: absolute;
        width: 314px;
        height: 16px;
        left: 20px;
        top: 290px;
        text-align: center;


        img{
            position: relative;
            width: 20px;
            padding: 0 10px;
        }

        span{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 16px;
            color: #1E1E1E;
        }
    }
`