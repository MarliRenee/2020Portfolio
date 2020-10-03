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
            <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={['fab', 'github']} />
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </div>
            </div>
        )
    }
}
