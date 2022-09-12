import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/> }/>
                <Route path='/repositorio/:repositorio' element={ <Repository/> }/>
            </Routes>
        </BrowserRouter>
    );
}
