import React from 'react'
import './cover.css'




const Cover = (props) => {
    const scrollBottom = e => {
        e.current.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="main-banner">
            <img className='banner' src='https://cdn.nirmitee.io/banner.jpeg' alt='banner' />
            <div className='headline'>
                <h1>Understand Business and Deliver Technology</h1>
                <h3>Our Business consulting experts understand your business, just like you,
                    and help us develop a more relevant version of your requirements,
                    adding a cutting edge to our deliveries</h3>
                <div className='button'>
                    <button class="btn"  >TALK TO OUR EXPERT</button>
                    <button class="btn" onClick={() => scrollBottom(props.scrollRef)} >VIEW OUR PORTFOLIO</button>
                </div>
            </div>
        </div>
    )
}

export default Cover