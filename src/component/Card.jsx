//rafc
//using props
//props key {props.key = value} based on what key that use when the comp is called
// import React, { Component } from 'react'
// import './card.css'

// export default class Card extends Component {

//     // state = {
//     //     amount: 0
//     // }

//     // updateValue = (newValue)=>{
//     //     this.props.updateNumber(newValue)
//     // }

//     // handlePlus = ()=>{
//     //     this.setState(
//     //         {
//     //             amount: this.state.amount+1
//     //         },
//     //         ()=>{
//     //             this.updateValue(1)
//     //         }
//     //     )
//     // }
//     // handleMinus = ()=>{
//     //     if(this.state.amount >0){
//     //         this.setState({
//     //             amount: this.state.amount-1
//     //         },
//     //         ()=>{
//     //             this.updateValue(-1)
//     //         }
//     //         )  
//     //     }      
//     // }


//     render() {
//         return (
//         <div id='Card' className='px-3 col-4 col-lg-3 mb-5 text-center wrap' >
//             <div className='card-image'>
//             {
//                 this.props.image == null 
//                 ?<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6679e1fc-08c4-44a0-964e-7cb6993d7c38/ddetrxb-39fcf177-bc54-462e-9da3-626ebf8d6500.png/v1/fill/w_1280,h_1096,q_80,strp/dragon_dahyun_by_jpezza_ddetrxb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5NiIsInBhdGgiOiJcL2ZcLzY2NzllMWZjLTA4YzQtNDRhMC05NjRlLTdjYjY5OTNkN2MzOFwvZGRldHJ4Yi0zOWZjZjE3Ny1iYzU0LTQ2MmUtOWRhMy02MjZlYmY4ZDY1MDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nfBBT7NtC2daqx7jmDcfu8hasTJkamI8ynr7pYefweo"  className='card-img-top w-100 ' alt="..." />
//                 : <img src={this.props.image} className='w-100 h-100 ' alt={this.props.title} />
//             }
//             </div>

//             <div className='pt-3 text-center card-text'>
//                 <h3 className='card-title'>{this.props.title}</h3>
//                 <p> {this.props.description}</p>
//                 <h4 className='card-price'>Rp{this.props.price}</h4>
//             </div>
//             <button className='mt-3  w-100 mx-auto add-btn p-2' onClick={() =>this.props.addToCart(this.props.id)}>add to cart <i className='fa fa-cart-plus'></i></button>
//             {/* <a href="#" className='btn btn-primary'>Go somewhere</a> */}
//             {/* <div className='d-flex'>
//                 <button className='ms-auto' onClick={this.handleMinus}>-</button>
//                 <span className='w-100 text-center'>{this.state.amount}</span>
//                 <button className='me-auto' onClick={this.handlePlus}>+</button>
//             </div> */}
//         </div>
//         )
//     }
// }

import React from 'react';
import './card.css'

function Card(props) {
  return(
    <div id='Card' className='px-3 col-4 col-lg-3 mb-5 text-center wrap' >
    <div className='card-image'>
    {
        props.image == null 
        ?<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6679e1fc-08c4-44a0-964e-7cb6993d7c38/ddetrxb-39fcf177-bc54-462e-9da3-626ebf8d6500.png/v1/fill/w_1280,h_1096,q_80,strp/dragon_dahyun_by_jpezza_ddetrxb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5NiIsInBhdGgiOiJcL2ZcLzY2NzllMWZjLTA4YzQtNDRhMC05NjRlLTdjYjY5OTNkN2MzOFwvZGRldHJ4Yi0zOWZjZjE3Ny1iYzU0LTQ2MmUtOWRhMy02MjZlYmY4ZDY1MDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nfBBT7NtC2daqx7jmDcfu8hasTJkamI8ynr7pYefweo"  className='card-img-top w-100 ' alt="..." />
        : <img src={props.image} className='w-100 h-100 ' alt={props.title} />
    }
    </div>

    <div className='pt-3 text-center card-text'>
        <h3 className='card-title'>{props.title}</h3>
        <p> {props.description}</p>
        <h4 className='card-price'>Rp{props.price}</h4>
    </div>
    <button className='mt-3  w-100 mx-auto add-btn p-2' onClick={() =>props.addToCart(props.id)}>add to cart <i className='fa fa-cart-plus'></i></button>
    {/* <a href="#" className='btn btn-primary'>Go somewhere</a> */}
    {/* <div className='d-flex'>
        <button className='ms-auto' onClick={this.handleMinus}>-</button>
        <span className='w-100 text-center'>{this.state.amount}</span>
        <button className='me-auto' onClick={this.handlePlus}>+</button>
    </div> */}
    </div>
  )
}

// default props value
Card.defaultProps ={
    title: 'Dahyun 💕',
    desc: 'size 31 ml',
    price: '100.000'
}

export default Card;







