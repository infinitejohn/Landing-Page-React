import React, {useState, useEffect} from 'react';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Image} from '@chakra-ui/react';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/home'> 
                        <Image src={require('../../images/mechee-removebg-preview.png')} htmlHeight='20' htmlWidth='60' />
                            NiMECHe
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/home' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                About
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/products' onClick={closeMobileMenu}>
                                Leadership
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/'>
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
