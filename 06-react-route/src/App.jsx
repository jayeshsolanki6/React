import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './Component/Navbar';
import Product from './Pages/Product';
import Smartphone from './Pages/Smartphone';
import PageNotFound from './Pages/PageNotFound'

const App = () => {
    return (
        <div className='page'>
            <Navbar />
            <div className='routs'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product' element={<Product />}>
                        <Route path='smart' element={<Smartphone />}/>
                    </Route>
                    <Route path='/:id' element={<PageNotFound />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App