import React, { useState, useEffect} from 'react'
import SearchItem from './SearchItem'
import Card from './Card'
import Jumbotron from './Jumbotron'
import './jumbotron.css'
import axios from 'axios'
import MyCart from './MyCart'

function Main() {

    const[items, setItems] = useState([])
    const[itemsFound, setItemsFound] = useState([])
    const[cartItems, setCartItems] = useState([])
    const[searchTerm, setSearchTerm] = useState('')
    const[total, setTotal] = useState(0)

    useEffect(() => {
        axios.get('/dataFake.json').then(
            res => setItems([...res.data])
        ).catch(err => console.log(err))
    }, [])
    
    const changeHandler = e =>{
        setSearchTerm(e.target.value)
    }

    const updateTotal = price =>{
        setTotal(prevState => prevState+price)
    }

    const addToCart = id =>{
        const selectedItem = items.find(item => item.id === id)
        if(!cartItems.includes(selectedItem)){
            setCartItems([...cartItems, selectedItem])
            updateTotal(selectedItem.price)
        }
    }

    const removeFromCart = (id, price)=>{
        const filteredItems = cartItems.filter(item =>item.id !==id)
        setCartItems([...filteredItems]) 
        updateTotal(-price)
    }

    const submitHandler = e =>{
        e.preventDefault()
        setItemsFound([...items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))])
        console.log(itemsFound)
    }

    
    let num = Number(total)
    let roundedString = num.toFixed(2)
    let rounded = Number(roundedString)

    return (
        <div>                
            <Jumbotron>
                <SearchItem  changeHandler = {changeHandler} submitHandler ={ submitHandler} />
            </Jumbotron>
            <div className={`row ${itemsFound==0?'d-none':''}`}>
                <div className='row mt-5 col-8 ms-auto'>
                    {
                        itemsFound.length>0  ?
                        itemsFound.map(item => <Card key={item.id} {...item} addToCart={addToCart}/>)
                        : ''
                    }          
                </div>
        
                <div className='mt-5 col-2 me-auto card border card border-dark rounded'>
                    <h3>My Cart</h3>

                    {cartItems.map(item => 
                        <MyCart key={item.id} id={item.id} title={item.title} price={item.price} removeFromCart={removeFromCart} updateTotal={(value)=>updateTotal(value)} />
                    )}
                    <h3>Total : {rounded}</h3>
                </div>
            </div>
        </div>
    )
}

export default Main;




// class Main extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items:[],
//             filterItems: [],
//             searchTerm:'',
//             myCart:[],
//             total: 0
//         }
//         //const items = this.state.items
//     }

//     changeHandler = (e)=>{
//         this.setState({
//             searchTerm : e.target.value
//         })
//     }

//     // submitHandler = (e) =>{
//     //     e.preventDefault()
//     //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=84a46e97f3d14e1a1de0b86810f39d3c&query=${this.state.searchTerm}`)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         this.setState({
//     //             items: [...data.results]
//     //         },()=> console.log(this.state.items))
//     //     })
//     // }

//     componentDidMount(){
//         axios.get('/dataFake.json')
//         .then(res => {
//             this.setState({
//                 items: [...res.data]
//             })
//         })
//     }

//     submitHandler = (e) =>{
//         e.preventDefault()
//         this.setState({
//             filterItems : this.state.items.filter(item => item.title.toLowerCase().includes(this.state.searchTerm))
//         },()=>console.log(this.state.filterItems))

//     }

//     addToCart = (id)=>{
//         const selectedItem = this.state.items.find(item => item.id == id)
//         if(!this.state.myCart.includes(selectedItem)){
//             this.setState({
//                 myCart : [...this.state.myCart, selectedItem]
//             }, ()=>this.updateTotal(selectedItem.price))
//         }
//     }

//     removeFromCart = (id, prices)=>{
//         const selectedItem = this.state.myCart.filter(item => item.id != id)
//         if(!this.state.myCart.includes(selectedItem)){
//             this.setState({
//                 myCart : selectedItem
//             }, ()=>this.updateTotal(-prices))
//         }
//     }

//     updateTotal = (price) =>{
//         this.setState( prevState => ({
//             total : prevState.total + price
//         }),  ()=>{
//            // console.log(this.state.total)
//         })
//     }



//     render() {
//         let num = Number(this.state.total) // The Number() only visualizes the type and is not needed
//         let roundedString = num.toFixed(2);
//         let rounded = Number(roundedString);
//         return (
//             <div>
                
//                 <Jumbotron>
//                     <SearchItem  changeHandler = {this.changeHandler} submitHandler ={ this.submitHandler} />
//                 </Jumbotron>
//                 <div className='row'>
//                     <div className='row mt-5 col-8 ms-auto'>
//                         {
//                             this.state.filterItems.length  ?
//                             this.state.filterItems.map(item => 
//                             <Card key={item.id} {...item} addToCart={this.addToCart}/>)
//                             : ''
//                         }             
//                     </div>
                
//                     <div className='mt-5 col-2 me-auto'>
//                         <h3>My Cart</h3>
    
//                         {this.state.myCart.map(item => 
//                             <MyCart key={item.id} id={item.id} title= {item.title} price={item.price} removeFromCart={this.removeFromCart} updateTotal={(value)=>this.updateTotal(value)}></MyCart>
//                         )}
//                         <h3>Total : {rounded}</h3>
//                     </div>
//                 </div>
//             </div>
//         )

//     }
// }

// export default Main
