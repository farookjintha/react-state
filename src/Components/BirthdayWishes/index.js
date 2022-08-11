
import React from 'react';
// import { useState } from 'react';

const BirthdayWishes = (props) => {
    const [name, setName] = React.useState('');


    









    return (
        <div>
            <div>
                <button onClick={() => setName('John')}>Click to Wish!</button>
            </div>
            {name && alert(`Happy Birthday ${name} !`)}
        </div>
    )
};


export default BirthdayWishes;