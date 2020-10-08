import React, { Component } from 'react'
import Accordion from './Accordion/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'



import './CaseStudy.css'

export default class CaseStudy1 extends Component {


    render () {
        library.add(fab)

        return (
            <div className='CaseStudy4'>
                <div className='Title&Intro'>
                    <div className='Mockups4'>
                        <img src='https://github.com/MarliRenee/Marli-Renee-Portfolio/blob/main/src/Assets/AccessibilityMockup-01.png?raw=true' alt='A screenshot of the Intro to Accessibility Quiz. The background is in soft green and blue, the text is bold and confident' />     
                    </div>
                    <Accordion 
                        title="
                            Intro to Accessibility
                        " 
                        content="
                            <div class='Project1'>
                            <div class='ProjectScreenshot'>
                               
                            </div>
                            <div class='ProjectInfo'>
                                <div class='ProjectTitle'>
                                    <h3>Accessibility Quiz</h3>
                                </div>
                                <div class='ProjectSummary'>
                                    <p>A quiz designed for new web developers, overviewing a few best practices to make their websites 
                                    and apps more accessible for viewers.</p>
                                    <p><a href='https://github.com/MarliRenee/QuizApp' target='_blank'>Github Repo</a>
                                    <a href='https://marlirenee.github.io/QuizApp/' target='_blank'>Live Site</a>
                                    </p>
                                </div>
                            </div>
                        </div>  
                        "
                    />
                </div>    
                <hr class="rounded"></hr>  
            </div>
            
        )
    }
}
