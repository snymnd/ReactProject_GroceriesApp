import React, { Component } from 'react'
import Card from './Card'

export default class product extends Component {
    render() {
        return (
            <div className='container row mx-auto mt-5'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>        
            </div>
        )
    }
}
