import React from 'react';
import './Nav.css';

const Nav = ({onRouteChange, isSignedIn})=>{
        if(isSignedIn)
        { 
            return (
                <nav className= 'Nav'>
                    <p 
                        className= 'f3 link dim black underline pointer'
                        onClick= {()=>onRouteChange ('SignIn') }>
                        SIGN OUT
                    </p>
                </nav>
        )
        } else 
            { 
                return ( 
                    <nav className= 'Nav'>
                        <p 
                        className= 'f3 link dim black underline pointer'
                        onClick= {()=>onRouteChange ('SignIn') }>
                        SIGN IN
                        </p>
                        <p 
                        className= 'f3 link dim black underline pointer'
                        onClick= {()=>onRouteChange ('Register') }>
                        REGISTER
                        </p>
                    </nav>
        );
        }
}
export default Nav; 