import React from 'react';
import './mainPage.css'

function MainPage() {
    return ( 
        <div>
            <div>
                <a className='my-2'>
                    <img className="rounded-top rounded-bottom my-2" src="https://s3-ap-southeast-2.amazonaws.com/cashrewards.prod.hub-pages/Images/gift-cards/amazon-gift-card.jpg"></img>
                </a>
                <a className='cursor mt-1'>
                    <img className="rounded-top rounded-bottom" src="https://s3-ap-southeast-2.amazonaws.com/cashrewards.prod.hub-pages/Images/gift-cards/ebay-gift-card.jpg"></img>
                </a>
            </div>
        </div>
     );
}

export default MainPage
