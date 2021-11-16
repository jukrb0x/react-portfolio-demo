import { Button, Nav } from '@douyinfe/semi-ui';
import {
    IconComment,
    IconHome,
    IconLive, IconMoon, IconPercentage
} from '@douyinfe/semi-icons';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNav: 'home' // FIXME: the active route
        };
    }

    handleDarkMode() {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    }

    render() {
        return (
            <div style={ { backgroundColor: 'var(--semi-color-bg-1)' } }>
                <Nav mode="horizontal" defaultSelectedKeys={ [this.state.selectedNav] } className={ "navbar" }>
                    <Nav.Header>
                        <IconPercentage style={ { fontSize: 36, color: "var(--semi-color-text-1" } }/>
                    </Nav.Header>
                    <NavLink to="/home">
                        <Nav.Item itemKey="home" text="Home" icon={ <IconHome size="large"/> }/>
                    </NavLink>
                    <NavLink to="/aha">
                        <Nav.Item itemKey="aha" text="Aha!" icon={ <IconLive size="large"/> }/>
                    </NavLink>
                    <NavLink to="/contact">
                        <Nav.Item itemKey="contact" text="Contact me" icon={ <IconComment size="large"/> }/>
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

                    </Nav.Footer>
                </Nav>
            </div>
        );
    }
}

export default Navbar;
