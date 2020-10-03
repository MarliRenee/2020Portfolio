import React, { Component } from 'react'
import './Intro.css'

export default class Intro extends Component {

    render () {
        return (
            <div className='Intro'>
                <div className="Inner">
                    <div className="InnerText">
                        <h1>One Woman Army</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>Portfolio</button>
                    </div>
                    <img className="flowers" src="https://github.com/MarliRenee/2020Portfolio/blob/main/src/Assets/Card-01.png?raw=true" alt="a soft, peachy bunch of flowers, set just behind a steaming mug of tea"></img>
                </div>
            </div>
        )
    }
}


