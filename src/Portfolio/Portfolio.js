import React, { Component } from 'react'
import './Portfolio.css'
import CaseStudy1 from './CaseStudy1/CaseStudy1'
import CaseStudy2 from './CaseStudy2/CaseStudy2'

export default class Portfolio extends Component {

    render () {
        return (
            <div className='Portfolio'>
                <h2>Portfolio</h2>
                <CaseStudy1 />
                <CaseStudy2 />
            </div>
        )
    }
}
