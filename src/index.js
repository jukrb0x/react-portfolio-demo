import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; // node package
import './index.sass';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aha from "./pages/Aha";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }>
                    <Route path={ "/" } element={ <Home/> }/>
                    <Route path={ "/home" } element={ <Home/> }/>
                    <Route path={ "/contact" } element={ <Contact/> }/>
                    <Route path={ "/aha" } element={ <Aha/> }/>
                    <Route
                        path="*"
                        element={
                            <main style={ { padding: '1rem' } }>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
;
