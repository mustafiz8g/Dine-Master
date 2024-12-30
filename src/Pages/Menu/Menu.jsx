import Cover from "../Shared/Cover";

import {  Helmet } from 'react-helmet-async';
import menuImg from '../../../src/assets/menu/banner3.jpg'
const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Dine | Menu</title>
            </Helmet>
            <Cover 
            img = {menuImg}
            title={'our menu'}
            ></Cover>
            
            
        </div>
    );
};

export default Menu;