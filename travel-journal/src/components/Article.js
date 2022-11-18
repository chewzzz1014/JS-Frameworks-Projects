import React from 'react'
import { ImLocation } from 'react-icons/im'

function Article() {
    return (
        <div className='article-section'>
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt="" />

            <div className='article-contents'>
                <div className='location-details'>
                    <p className='location'><ImLocation color='red' /> Japan</p>
                    <a href="#" className='google-map-link'>View on Google Maps</a>
                </div>
                <div className='about-location'>
                    <h1 className='place-name'>Mount Fiji</h1>
                    <b><p className='date'>12 Jan, 2102 - 24 Jan, 2021</p></b>
                    <p className='place-desc'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus hic explicabo fuga libero expedita optio repellendus corporis iste, est nemo similique qui, tempora alias quas dignissimos error ut dolore nulla!
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Article