
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import desertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import Section_Title from "../../Components/Section_Title";
import MenuCategory from "./MenuCategory";
import Cover from '../Shared/Cover';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Dine | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'our menu'}
            ></Cover>
            {/* main cover  */}
            <Section_Title
                subHeading={"Don't Miss"}
                heading={'Todays Offer'}
            ></Section_Title>
            {/* offer menu item  */}
            <MenuCategory items={drinks} ></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title={'dessert'}img={desertImg}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;