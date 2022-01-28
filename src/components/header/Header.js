import React from 'react'
import { HeaderTexts } from '../../data'
import './Header.css'

function Header() {
    let btn = 'view plans'
    return (
        <div className='header'>
            
            <div className='image-container'> 
                <img src='./images/image-intro-mobile.jpg' alt='' className='intro-image'/>
            </div>
            
            <div className='header-texts'>
            <div className='underline'></div>
                {HeaderTexts.map((item)=>{
                    const {id, text, head} = item;
                    return (
                        <div key={id}>
                            <h1>{head}</h1>
                            <p>{text}</p>
                        </div>
                    )
                })}
                <button className='view-plans2'>{btn}</button>
            </div>
        </div>
    )
}

export default Header

