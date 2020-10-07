import React, { Component } from 'react'
import './Portfolio.css'
import CaseStudy1 from './CaseStudy1/CaseStudy1'

export default class Portfolio extends Component {

    render () {
        return (
            <div className='Portfolio'>
                <h2>Portfolio</h2>
                <CaseStudy1 />
            </div>
        )
    }
}
