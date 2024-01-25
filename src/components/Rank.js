import React from 'react';
import './Rank.css';

const Rank= ({name, entries})=>{
    return (
        <div>
            <div className='Rank-el'>
                {`${name}  , Your current entry count is ... `}      
            </div>
            <div className='Rank-el f1'>
                <div> {entries} </div>        
            </div>
        </div>
    )
}

export default Rank;