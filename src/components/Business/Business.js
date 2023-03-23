import React from 'react';
import './Business.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italien',
    rating: '4.5',
    reviewCount: 90
};

class Business extends React.Component {
    render() {
        return (
            <div className='Business'>
                <div className='image-container'>
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                <h2>{business.name}</h2>
                <div className='Business-Information'>
                    <div className='Business-adress'>
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className='Business-review'>
                        <h3>{business.category}</h3>
                        <h3 className='rating'>{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;