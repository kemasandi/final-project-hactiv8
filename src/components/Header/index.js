import React, { Component } from 'react';
import logoHeader from '../../assets/images/icon-header.svg'
import { Container, Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd} from 'bloomer'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="header">
                    <Container>
                        <NavbarBrand>
                            <NavbarItem className="">
                                <Link to="/"><img src={logoHeader}/></Link>
                            </NavbarItem>
                        </NavbarBrand>
                        <NavbarMenu >
                            <NavbarStart>
                            </NavbarStart>
                            <NavbarEnd>
                            <NavbarItem>
                               <Link to="/webwhatsapp">WHATSAPP WEB</Link> 
                            </NavbarItem>
                            <NavbarItem href='#/'>FEATURES</NavbarItem>
                            <NavbarItem href='#/'>DOWNLOAD</NavbarItem>
                            <NavbarItem href='#/'>SECURITY</NavbarItem>
                            <NavbarItem>
                                <Link to="/faq">FAQ</Link> 
                            </NavbarItem>
                            {/* <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href='#/documentation'>EN</NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItem href='#/'>One A</NavbarItem>
                                    <NavbarItem href='#/'>Two B</NavbarItem>
                                    <NavbarDivider />
                                    <NavbarItem href='#/'>Two A</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem> */}
                            </NavbarEnd>
                        </NavbarMenu>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;