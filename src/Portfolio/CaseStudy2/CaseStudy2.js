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
                    <div className='Mockups2'>
                        <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/Aware/HomescreenGIF.gif?raw=true' alt ='A gif of the Aware app homescreen, scrolling through a demo'/>
                        
                    </div>
                    <Accordion 
                        title="
                            Aware: Cognitive Behavioral Therapy
                        " 
                        content="
                                <p>Full-Stack Mobile App for Satir's Iceberg Processing Model</p>
                                <p><a href='https://aware-app.vercel.app/'>Live App<a/> | <a href='https://github.com/MarliRenee/aware-app/tree/styling'>Repo<a/></p>

                            </div>
                            <div className='Process'>
                                <h3>Process & Experience</h3>
                                <div className='Expectation'>
                                    <p><b>Expectations:</b></p>
                                    <p>Therapists around the world have been utilizing Satir's Iceberg Model as a processing tool for decades. However, the tool is normally completed as a worksheet. As a personal exercise, I recreated this model as an accessible, mobile-first website.</p>
                                    <p><i>Existing worksheet:</i></p>
                                    <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/Aware/9510033b9ba59a54b4837a07024d956c.jpg?raw=true' alt='A spare, black and white drawing of an iceberg, segmented into 8 levels'/>
                                </div>
                                <p><i>A few of initial wireframes, created in Figma:</i></p>
                                <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/Aware/AwareWireframes.png?raw=true' alt='Three iPhone mockup wireframes in shades of black and white'/>
                                <a href='https://www.figma.com/proto/rcPOLOlMijmmkxlU4z1oF0/Aware-Wireframes?node-id=2%3A38&scaling=min-zoom'>View in Figma</a>
                                <p>After testing the wireframes, it became clear that users wanted to be able to save their processing 'Iceberg', to save and reference for later. I created a user dashboard that could archive past interactions.</p>
                                <h3>Final Layout Designs</h3>
                                <p>The fullstack site includes a demo, a user registration and sign-in, a user dashboard, and an interactive processing flow with helpful prompts.</p>
                                <div class='Preview'>
                                    <img src='https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/Homepage.jpg?raw=true' alt='Home Page'></img>
                                    <img src='https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/Login.PNG?raw=true' alt='Login Page'></img>
                                    <img src='https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/IcebergSample.PNG?raw=true' alt='Iceberg Page'></img>
                                    <img src='https://github.com/MarliRenee/aware-app/blob/styling/src/Assets/QuestionSample.jpg?raw=true' alt='Iceberg Question'></img>
                                </div>

                            </div>
                        "
                    />
                </div>    
                    
            </div>
            
        )
    }
}
