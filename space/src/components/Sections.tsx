import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import Intro from '../pages/Intro';
import Technology from '../pages/Technology';

function Sections() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="destinations" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="tech" element={<Technology />} />
        </Routes>
    );
}

export default Sections;
