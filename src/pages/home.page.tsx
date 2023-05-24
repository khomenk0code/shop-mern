import React from 'react';
import Navbar from "../components/navbar.component";
import Announcement from "../components/anonouncement.component";
import Slider from "../components/slider.component";
import Categories from "../components/categories.component";
import Products from "../components/products.component";



const Home: React.FC = () => {
    return (
        <div>
            <Announcement/>
           <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Home;
