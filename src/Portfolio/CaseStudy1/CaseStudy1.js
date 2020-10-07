import React, { Component } from 'react'
import './CaseStudy.css'

export default class CaseStudy1 extends Component {

    render () {
        return (
            <div className='CaseStudy'>
                <div className='Title&Intro'>
                    <div className='Mockups'>
                        <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups.jpg?raw=true'/>
                    </div>
                    <h2>Case Study Name</h2>
                    <h3>Subtitle</h3>
                    <p>Intro paragraph & assumptions</p>

                </div>
                <div className='Process'>
                    <h3>Process & Experience</h3>
                    <p>Iteration</p>
                    //Mood Boards, Character Design
                </div>
            </div>
            
        )
    }
}
