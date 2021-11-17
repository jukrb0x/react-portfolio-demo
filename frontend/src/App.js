import './App.sass';
import LayoutBuilder from './components/LayoutBuilder';
import { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className={ 'App' }>
                <LayoutBuilder/>
            </div>
        );
    }
}

export default App;
