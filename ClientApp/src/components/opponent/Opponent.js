import React from 'react';
import Hand from '../hand/Hand';

const Opponent = ({ hand, front }) => {
    return (
        <div>
           <Hand hand={hand} front={front}/>
        </div>
    );
}

export default Opponent;