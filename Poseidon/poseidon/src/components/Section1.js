import React from 'react';
import Statemant from './Statemant';
import './common/Section1.css';
import Members from './Members';

const Section1 = () => {
    return (
        <div id="Section1">
           <Statemant statemant="About Us"/>
           <Members />
        </div>
    )
}

export default Section1;
