import React, {useState} from 'react'
import LogoName from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const navController = () =>{
        setOpen(!open)
    }
    
    return (
        <div className='Nav'>
            <div className="leftNav">
                <img src={LogoName} alt=""  className='logo'/>
                <FaBars className='phoneNav' onClick={navController} />
            </div>
            
            <div className="rightNav" style={open?{display:'flex'}:{}}>
                <ul className='links'>
                    <li><a href="#"></a>Features</li>
                    <li><a href="#"></a>Pricing</li>
                    <li><a href="#"></a>Resources</li>
                </ul>
                <div className="navLine"></div>
                <ul className='signUpLinks'>
                    <li><a href="#">Login</a></li>
                    <li><input id='signupBtn' type="button" value="Sign Up" /></li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Nav
