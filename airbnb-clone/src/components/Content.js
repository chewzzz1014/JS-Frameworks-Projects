import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import item_1 from '../images/item_1.png'
import item_2 from '../images/item_2.png'
import item_3 from '../images/item_3.png'

function ItemBox(props) {

    const { rating, numRating, country, title, price, openSpots, location } = props.data;

    let badgeText;
    if (openSpots === 0)
        badgeText = 'SOLD OUT'
    else if (location === 'online')
        badgeText = 'ONLINE'

    return (
        <div className='item-box'>

            {badgeText && <div className='item-status'>
                {badgeText}
            </div>}

            <img src={props.item} alt="" className='item-img' />

            <div className='item-name'>
                <AiFillStar color='red' /> <span>{rating}</span> <span>({numRating})</span> <span>&middot;</span> {country}
            </div>
            <div className='item-desc'>
                {title}
            </div>
            <div className='item-price'>
                <b>From ${price}</b> / person
            </div>
        </div>
    )
}

function Content() {

    const item1_data = {
        rating: 5.0,
        numRating: 6,
        country: 'USA',
        title: 'Life lessons with Katie Zaferes',
        price: 136,
        openSpots: 0,
        location: 'physical'
    }

    const item2_data = {
        rating: 5.0,
        numRating: 30,
        country: 'USA',
        title: 'Learning wedding photography',
        price: 126,
        openSpots: 1,
        location: 'online'
    }

    const item3_data = {
        rating: 4.8,
        numRating: 2,
        country: 'USA',
        title: 'Group Mountain Biking',
        price: 50,
        openSpots: 2,
        location: 'physical'
    }

    return (
        <div className='content'>
            <ItemBox item={item_1} data={item1_data} />
            <ItemBox item={item_2} data={item2_data} />
            <ItemBox item={item_3} data={item3_data} />
        </div>
    )
}

export default Content;