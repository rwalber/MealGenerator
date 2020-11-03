import { React } from 'react';

import logo from '../styles/components/logo.css';

import Chef from '../assets/chef.png';

export default function Logo() {
    return(
        <>
            <div className="banner">
                
                <div className="images">
                    <img src={Chef} alt=""/>
                </div>

                <div className="slogan">
                    <p>
                        Feeling <b>angry</b>?? and <b>hungry</b>?? <br/>
                        Get a random meal by clicking below
                    </p>
                </div>
            
            </div>
        </>
    );
}