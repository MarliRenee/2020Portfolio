import React, { Component } from 'react'
import Accordion from './Accordion/Accordion'
import './CaseStudy.css'

export default class CaseStudy1 extends Component {

    render () {
        return (
            <div className='CaseStudy'>
                <div className='Title&Intro'>
                    <div className='Mockups'>
                        <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups_Mesa%20de%20trabajo%201.png?raw=true' alt='Five mobile mockups of San José Cal-SOAPs interactive student hub. The login screen is prominently featured.'/>
                        
                    </div>
                    <Accordion 
                        title="
                            San José Cal-SOAP: Student Hub
                        " 
                        content="
                                <p>A mobile-first center for San José highschool students to explore their college options, learn about grants and funding, and get one-on-one college mentorship.</p>
                                <p>The California Student Opportunity and Access Program (Cal-SOAP) was established by the state legislature in 1978. Today, Cal-SOAP is instrumental in improving the flow of information about post-secondary education and financial aid while raising the achievement levels of low-income elementary and secondary school students or geographic regions with documented low eligibility or college participation rates, and who are first in their families to attend college.</p>
                                <p><i>To comply with my client agreement I have omitted confidential information. These designs are a reinterpretation of the original.</i></p>

                            </div>
                            <div className='Process'>
                                <h3>Process & Experience</h3>
                                <div className='Expectation'>
                                    <p><b>Expectations:</b></p>
                                    <p>The client was looking for a space and tech themed interactive experience, inspired by Shatner-era Star Trek. Designs were led by playful avatars, soft-gradients and pops of contrast.</p>
                                    <p><i>Existing client website and color scheme:</i></p>
                                    <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSOAPsite.png?raw=true' alt='Existing client website'/>
                                </div>
                                <p><i>My initial avatar designs, later used in a seperate Cal-SOAP video series:</i></p>
                                <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/TechGirl_072920_Page_2.jpg?raw=true' alt='Four vector models of a young girl in a spacesuit'/>
                                <p>We went through several rounds of mood boards, character designs and user story revisions to craft a straightforward narrative.</p>
                                <h3>Final Layout Designs</h3>
                                <p>The re-imagined layout includes an events page, an alerts and messages center, and an interactive student mentor chat feature.</p>
                                <div className='Preview'>
                                <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups-03.png?raw=true' alt='Login Page Mockup'></img>
                                    <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups-01.png?raw=true' alt='Upcoming Events Page Mockup'></img>
                                    <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups-02.png?raw=true' alt='College Info Page Mockup'></img>
                                    <img src='https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/CalSoap/CalSoapMockups-04.png?raw=true' alt='Alerts Page Mockup'></img>
                                </div>

                            </div>
                        "
                    />
                </div>    
                    
            </div>
            
        )
    }
}
