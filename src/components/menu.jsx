import React from 'react';
import './menu.css';

function Menu() {
    return ( 
        <div className="d-grid gap-2 col-6 mx-auto menu-item">
            <button className='btn btn-sm btn-primary' type='button'>Activate Your Card</button>
            <button className='btn btn-sm btn-primary' type='button'>Check Your Balance</button>
            <button className='btn btn-sm btn-primary' type='button'>Terms and Conditions</button>
        </div>
     );
}

export default Menu;   