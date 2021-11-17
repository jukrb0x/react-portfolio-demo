import { Component } from 'react';
import { Outlet } from "react-router-dom";

export default class MainContent extends Component {
    // outlets of routing main content
    render() {
        return (
            <Outlet/>
        );
    }
}
