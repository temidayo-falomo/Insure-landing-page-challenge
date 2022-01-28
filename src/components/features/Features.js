import React from 'react'
import { dataFeatures } from '../../data'
import './Features.css'

function Features() {
    return (
        <section>
        <div className='different'>
            <div className='underline-2'></div>
            <h1>We're different</h1>
        </div>
        <div className='features-list'>
            {dataFeatures.map((item)=> {
                const {id, text, h4, icon} = item;
                return (
                    <div key={id} className='features-items'>
                        <img src={icon} alt='' className='feature-icon'/>
                        <h4>{h4}</h4>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
    </section>
    )
}

export default Features


