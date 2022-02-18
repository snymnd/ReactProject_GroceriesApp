import React from 'react';

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
        <div className="container text-center">
            <h1 className="display-4">judul yee</h1>
            {
                props.children
            }
        </div>
    </div>
  )
}

export default Jumbotron;


// import React, { Component } from 'react'



// export default class Jumbotron extends Component {
    
//     // componentDidMount(){
//     //     axios.get('/dataFake.json')
//     //     .then(res => {
//     //         this.setState({
//     //             items : res.data
//     //         })
            
//     //     })
//     //     .catch(error => console.log(error))
//     // }




//     render() {
//         return (
//             <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
//                 <div className="container text-center">
//                     <h1 className="display-4">judul yee</h1>
//                     {
//                         this.props.children
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
