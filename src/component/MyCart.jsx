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

