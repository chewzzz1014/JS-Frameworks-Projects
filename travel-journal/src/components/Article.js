import React from 'react'
import { ImLocation } from 'react-icons/im'

function Article(props) {

    const { country, imgLink, mapLink, name, startDate, endDate, desc } = props.data;

    return (
        <div className='article-section'>
            <img src={imgLink} alt="" />


            <div className='article-contents'>
                <div className='location-details'>
                    <p className='location'><ImLocation color='red' />{country}</p>
                    <a href={mapLink} className='google-map-link'>View on Google Maps</a>
                </div>
                <div className='about-location'>
                    <h1 className='place-name'>{name}</h1>
                    <b><p className='date'>{startDate} - {endDate}</p></b>
                    <p className='place-desc'>
                        {desc}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Article