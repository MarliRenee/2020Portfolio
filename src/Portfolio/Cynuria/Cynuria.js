import React, { Component } from 'react'
import Accordion from './Accordion/Accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'



import './CaseStudy.css'

export default class Cynuria extends Component {


    render () {
        library.add(fab)

        return (
            <div className='CaseStudy2'>
                <div className='Title&Intro'>
                    <div className='Mockups2'>
                        <img src='https://github.com/MarliRenee/Marli-Renee-Portfolio/blob/main/src/Assets/Cynuria/CynuriaMockup-01.png?raw=true' alt ='A laptop mockup of the Cynuria homepage'/>
                        
                    </div>
                    <Accordion 
                        title="
                            Cynuria: Website Redesign
                        " 
                        content="   
                            <div class='Process'>
                                <p>Desktop & Mobile Redesign</p>
                                <p><a href='https://www.cynuriaconsulting.com/'>Live Website<a/>
                                <h3>Process & Experience</h3>
                                <div className='Expectation'>
                                    <p><b>Expectations:</b></p>
                                    <p>Cynuria Consulting is an award-winning consulting firm, looking for a complete website overhaul. They were particularly interested in a mobile-first design. They required a website refresh that facilitated
                                        a commerce platform, a blog, and frequently rotating case-studies. The project posed a unique challenge, in that the client did not want to see traditional wireframes, and rather 
                                        preferred to be presented with finalized looking mockups as a starting point. To facilitate this, I started all designs in Adobe Illustrator. 
                                     </p>
                                    <p><i>Initial Mockups:</i></p>
                                    <img src='https://github.com/MarliRenee/Marli-Renee-Portfolio/blob/main/src/Assets/Cynuria/CynuriaInitial-01.png?raw=true' alt='Four fully developed, color screenshots of possible homepage layouts'/>
                                </div>
                                <div class='Close'>
                                    <div class='Preview'>
                                        <img src='https://github.com/MarliRenee/Marli-Renee-Portfolio/blob/main/src/Assets/Cynuria/CynuriaMockup-02.png?raw=true' alt='About Page Mobile View'></img>
                                    </div>
                                    <div class='Text'>
                                        <h3>Final Layout Designs</h3>
                                        <p>The final site includes a homepage, an about page, a commerce page for selling courses, a blog, and a case studies page.</p>
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
