import Section_Title from "../../Components/Section_Title";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";



const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <Section_Title 
            heading={'From Our Menu'}
            subHeading={'Popular Item'}
            ></Section_Title>
            <div className="grid md:grid-cols-2">
                {
                    popular.map(item =><MenuItem key={item._id} item = {item}></MenuItem> )
                }
            </div>
        </section>
    );
};

export default PopularMenu;