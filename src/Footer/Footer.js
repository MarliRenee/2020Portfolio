import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

export default class Footer extends Component {

    render () {
        return (
            <div className='Footer'>
                    <li>
                        <a href='mailto:marlirenee@gmail.com'> <FontAwesomeIcon icon={faEnvelope}/> </a>
                    </li>
                    <li>
                        <a href="https://github.com/MarliRenee" target="_blank"> <FontAwesomeIcon icon={['fab', 'github']}/> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/marli-renee-4212211a6" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']}/> </a>
                    </li> 
            </div>
        )
    }
}
