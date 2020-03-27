import React, { useState, useEffect } from 'react';
// import { TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { getAllEstablishments } from '../api';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
const Menu = () => {
    const [Menu, setMenu] = useState([]);
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    useEffect(() => {
        console.log('Menu...');
    }, []);

    return (
        <div>

            <Navbar className="light" color="light" light expand="md">
                <NavbarToggler />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default Menu;