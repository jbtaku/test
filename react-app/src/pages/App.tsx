import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nanao from "./Nanao"
import Plant from './Plant';

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Nanao />} />
                <Route path="/Plant" element={<Plant />} />
            </Routes>
        </div>
    );
}

export default App;
