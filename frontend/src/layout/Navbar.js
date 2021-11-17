import { Button, Collapsible, Nav } from '@douyinfe/semi-ui';
import {
    IconComment,
    IconHome,
    IconLive, IconMenu, IconMoon, IconPercentage
} from '@douyinfe/semi-icons';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNav: 'home', // FIXME: the active route
            isDropdownMenuOpen: false
        };
        this.handleDropDownMenu = this.handleDropDownMenu.bind(this);
    }

    handleDarkMode() {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    }

    handleDropDownMenu() {
        this.setState({
            isDropdownMenuOpen: !this.state.isDropdownMenuOpen
        })
    }

    render() {
        return (
            <div style={ { backgroundColor: 'var(--semi-color-bg-1)' } } className={ "navbar" }>
                <Nav mode="horizontal" defaultSelectedKeys={ [this.state.selectedNav] }>
                    <Nav.Header>
                        <NavLink to={ "/home" }>
                            <IconPercentage style={ { fontSize: 36, color: "var(--semi-color-text-1" } }/>
                        </NavLink>
                    </Nav.Header>
                    <NavLink to="/home">
                        <Nav.Item itemKey="home" text="Home" icon={ <IconHome size="large"/> }/>
                    </NavLink>
                    <NavLink to="/aha">
                        <Nav.Item itemKey="aha" text="Aha!" icon={ <IconLive size="large"/> }/>
                    </NavLink>
                    <NavLink to="/contact">
                        <Nav.Item itemKey="contact" text="Contact me"
                                  icon={ <IconComment size="large"/> }/>
                    </NavLink>
                    <Nav.Footer>
                        <Button theme={ "borderless" }
                                icon={ <IconMoon size={ "extra-large" }/> }
                                style={ {
                                    color: 'var(--semi-color-text-2)',
                                } }
                                onClick={ () => {
                                    this.handleDarkMode()
                                } }
                        />
                        <Button theme={ "borderless" }
                                className={ "dropdown-nav-menu" }
                                icon={ <IconMenu size={ "extra-large" }/> }
                                onClick={ () => {
                                    this.handleDropDownMenu()
                                } }
                        />

                    </Nav.Footer>
                </Nav>
                <div className={ "dropdown-navigation-wrapper" }>
                    <Collapsible isOpen={ this.state.isDropdownMenuOpen }>
                        <div className={ "dropdown-navigation" }>
                            <NavLink to="/home">
                                <Nav.Item onClick={ () => {
                                    this.handleDropDownMenu()
                                } } itemKey="home" text="Home" icon={ <IconHome size="large"/> }/>
                            </NavLink>
                            <NavLink to="/aha">
                                <Nav.Item onClick={ () => {
                                    this.handleDropDownMenu()
                                } } itemKey="aha" text="Aha!" icon={ <IconLive size="large"/> }/>
                            </NavLink>
                            <NavLink to="/contact">
                                <Nav.Item onClick={ () => {
                                    this.handleDropDownMenu()
                                } } itemKey="contact" text="Contact me"
                                          icon={ <IconComment size="large"/> }/>
                            </NavLink>
                        </div>
                    </Collapsible>
                </div>
            </div>
        );
    }
}

export default Navbar;
