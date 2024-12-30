import { useEffect, useState } from "react";
import Section_Title from "../../Components/Section_Title";
import MenuItem from "../Shared/MenuItem";



const PopularMenu = () => {

    const [menu ,setMenu] = useState([]);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        })
    },[])
    return (
        <section>
            <Section_Title 
            heading={'From Our Menu'}
            subHeading={'Popular Item'}
            ></Section_Title>
            <div className="grid md:grid-cols-2">
                {
                    menu.map(item =><MenuItem key={item._id} item = {item}></MenuItem> )
                }
            </div>
        </section>
    );
};

export default PopularMenu;