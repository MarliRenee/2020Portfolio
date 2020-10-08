import React, { Component } from 'react'
import './Portfolio.css'
import CaseStudy1 from './CaseStudy1/CaseStudy1'
import CaseStudy2 from './CaseStudy2/CaseStudy2'
import CaseStudy3 from './CaseStudy3/CaseStudy3'
import CaseStudy4 from './CaseStudy4/CaseStudy4'

export default class Portfolio extends Component {

    render () {
        return (
            <div className='Portfolio'>
                <h2>Portfolio</h2>
                <CaseStudy1 />
                <CaseStudy2 />
                <div className="final2">
                    <CaseStudy3 />
                    <CaseStudy4 />
                </div>
            </div>
        )
    }
}
