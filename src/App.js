import './App.sass';

import LayoutBuilder from "./components/LayoutBuilder";

// const TestButton = () => ( // directly return use ()
//     // define an arrow function with {}
//     <Button type={ "primary" }>Test Butt</Button>
// )


const App = () => {
    return (
        <div className={ "App" }>
            <LayoutBuilder/>
        </div>
    )
};

export default App;
