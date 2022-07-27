import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Board() {
	return (
		<BoardLayout>
			<div className='container'>
				<h6>Board</h6>
				<div className='board_btn'>
					<Link to="" className='btn_red'>X-Traded</Link>
					<Link className="nav_item" to="">OTC</Link>
					<Link className="nav_item" to="">FI</Link>
					<Link className="nav_item" to="">Derivatives</Link>
				</div>
			</div>
			<div className='product'>
				<h6>Product</h6>
				<div className='board_btn'>
					<Link to="" className='all'>All</Link>
					<Link className="nav_item" to="">SMAZ</Link>
					<Link className="nav_item" to="">SBBS</Link>
					<Link className="nav_item" to="">SPRL</Link>
					<Link className="nav_item" to="">SGNG</Link>
					<Link className="nav_item" to="">SSGM</Link>
					<Link className="nav_item" to="">FETC</Link>
					<Link className="nav_item" to="">SCOC</Link>
				</div>
			</div>

		</BoardLayout>
	)
}

export default Board

const BoardLayout = styled.div`
	position: absolute;
	width: 1119px;
	height: 155px;
	left: 308px;
	top: 81px;
	background: #ffffff;

	.product{
		position: absolute;
		display: flex;
		align-items: center;
		text-align: center;
		top: 64px;

		h6 {
			position: relative;
			left: 25px;
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			display: flex;
			align-items: center;
			text-align: left;
			color: #1e1e1e;
		}

		.board_btn{
			display: flex;
			align-items: center;

			.all{
				box-sizing: border-box;
				position: relative;
				left: 7.78%;
				right: 65.97%;
				bottom: 86.99%;
				color: #fff;
				background: #D71E0E;
				border-radius: 50px;
				padding: 10px 20px;
			}

			a{
				list-style: none;
				margin: 0px 10px;
				color: #1e1e1e;
				font-weight: 600;

				:hover{
					background: #D71E0E;
					color: #fff;
				}
			}

			.nav_item{
				box-sizing: border-box;
				position: relative;
				left: 7.78%;
				right: 65.97%;
				bottom: 86.99%;
				background: #F8FAFB;
				border-radius: 100px;
				padding: 10px 20px ;
			}
		}
	}
	.container{
		display: flex;
		align-items: center;
		text-align: center;
		

		.board_btn{
			display: flex;
			align-items: center;

			.btn_red{
				box-sizing: border-box;
				position: relative;
				left: 7.78%;
				right: 65.97%;
				bottom: 86.99%;
				color: #fff;
				background: #D71E0E;
				border-radius: 100px;
				padding: 10px 10px ;
			}

			a{
				list-style: none;
				margin: 0px 18px;
				color: #1e1e1e;
				font-weight: 600;

				:hover{
					background: #D71E0E;
					color: #fff;
				}
			}
		}
		h6 {
			position: relative;
			left: 35px;
			bottom: 2px;
	
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 16px;
			display: flex;
			align-items: center;
			text-align: right;
	
			color: #1e1e1e;
		}

		.nav_item{
			box-sizing: border-box;
			position: relative;
			left: 7.78%;
			right: 65.97%;
			bottom: 86.99%;
			color: #fff;
			background: #F8FAFB;
			border-radius: 100px;
			padding: 10px 20px ;
		}
	}

`
