import React from 'react';
import Navbar from "../components/navbar.component";
import Announcement from "../components/anonouncement.component";
import Slider from "../components/slider.component";



const Home: React.FC = () => {
    return (
        <div>
            <Announcement/>
           <Navbar/>
            <Slider/>
        </div>
    );
};

export default Home;
