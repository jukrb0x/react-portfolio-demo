import { Avatar, Button, Nav } from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconHome,
    IconLive, IconMoon,
    IconSemiLogo,
    IconSetting
} from '@douyinfe/semi-icons';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNav: 'home'
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
                <Nav mode="horizontal" defaultSelectedKeys={ [this.state.selectedNav] }>
                    <Nav.Header>
                        <IconSemiLogo style={ { fontSize: 36 } }/>
                    </Nav.Header>
                    {/* TODO: change the icons */ }
                    <NavLink to="/home">
                        <Nav.Item itemKey="home" text="Home" icon={ <IconHome size="large"/> }/>
                    </NavLink>
                    <NavLink to="/aha">
                        <Nav.Item itemKey="aha" text="Aha" icon={ <IconLive size="large"/> }/>
                    </NavLink>
                    <NavLink to="/contact">
                        <Nav.Item itemKey="contact" text="Contact me" icon={ <IconSetting size="large"/> }/>
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
