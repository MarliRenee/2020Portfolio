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
            <div className='CaseStudy2'>
                <div className='Title&Intro'>
                    <div className='Mockups3'>
                    <img src="https://github.com/MarliRenee/Celebrate/blob/master/Optimized.gif?raw=true" alt="A walkthrough of the Celebrate App. The background is in soft pinks and purples, the text is bold and confident" />   
                    </div>
                    <Accordion 
                        title="
                            Celebrate Holiday Finder
                        " 
                        content="
                                <div class='ProjectInfo'>
                            <div class='ProjectTitle'>
                                <h3>Celebrate! Holiday Finder</h3>
                            </div>
                            <div class='ProjectSummary'>
                                <p>Celebrate is an international holiday finding app. Just search for a country, 
                                    enter a date, and see all the holidays happening on that date.</p>
                                <p><a href='https://github.com/MarliRenee/Celebrate' target='_blank''>Github Repo</a>
                                <a href='https://marlirenee.github.io/Celebrate/' target='_blank'>Live Site</a>
                                </p>
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
