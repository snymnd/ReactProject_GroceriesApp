import React, {useState } from 'react';

function MyCart(props) {
    const[amount, setAmount] = useState(1)

    const plusButton =()=>{
        setAmount(prevAmount => prevAmount+1)
        props.updateTotal(props.price)
    }

    const minusButton = ()=>{
        if(amount > 0){
            setAmount(prevAmount => prevAmount-1)
            props.updateTotal(-props.price)
        }
    }

    return (
        <div>
            <p>{props.title}</p>
            <div>
                <button onClick={plusButton}>+</button>
                <span className=''>{amount}</span>
                <button onClick={minusButton}>-</button>
            </div>
            <button onClick={()=>props.removeFromCart(props.id, props.price*amount)}>Remove Item</button>
            <div>
                <p>price:</p>
                <p>{props.price} x {amount} = {props.price*amount}</p>
            </div>
        </div>
    )
}

export default MyCart;


// import React, { Component } from 'react'

// class MyCart extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//              amount : 1,
//              prices : 0
//         }
//     }


//     setPrices =(price)=>{
//         this.setState({
//             prices : this.props.price*this.state.amount
//         }, ()=> console.log(this.state.prices))
//         this.props.updateTotal(price)
//     }


//     plusButton =()=>{
//         this.setState( prevState=> ({
//             amount : prevState.amount + 1
//         }), ()=>{
//             this.setPrices(this.props.price)
//         })
//     }

//     minusButton = ()=>{
//         if(this.state.amount > 0){
//             this.setState(prevState => ({
//                 amount : prevState.amount - 1
//             }), ()=>{
//                 this.setPrices(-this.props.price)
//             })

//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.props.title}</p>
//                 <div>
//                     <button onClick={this.plusButton}>+</button>
//                     <span className=''>{this.state.amount}</span>
//                     <button onClick={this.minusButton}>-</button>
//                 </div>
//                 <button onClick={()=>this.props.removeFromCart(this.props.id, this.state.prices)}>Delete Item</button>
//                 <div>
//                     <p>price:</p>
//                     <p>{this.props.price} x {this.state.amount} = {this.props.price*this.state.amount}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MyCart
