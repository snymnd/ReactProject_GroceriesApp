import React, { useState } from 'react';

function SearchItem(props) {
  const [isActive, setIsActive] = useState(false)

  return  (
    <div>
        <form action="submit" className='d-flex justify-content-center' onSubmit={props.submitHandler}>
            <div className="container position-relative">
                <div className={`search ${isActive?'open-search':''}`} onClick={()=>setIsActive(!isActive)} tabIndex={0} ></div>
                <input type="text" placeholder="Search and enter" onChange={props.changeHandler }></input>   
            </div>
        </form>            
    </div>
  )
}

export default SearchItem;




// import React, { Component } from 'react'

// export class SearchItem extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isActive : false
//         }
//     }
    
//     searchToggle = ()=>{
//         this.setState({
//             isActive : !this.state.isActive
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <form action="submit" className='d-flex justify-content-center' onSubmit={this.props.submitHandler}>
//                     <div className="container position-relative">
//                         <div className={`search ${this.state.isActive?'open-search':''}`} onClick={this.searchToggle} tabIndex={0 } ></div>
//                         <input type="text" placeholder="Search and enter" onChange={this.props.changeHandler }></input>   
//                     </div>
//                 </form>            
//             </div>
//         )
//     }
// }

// export default SearchItem
