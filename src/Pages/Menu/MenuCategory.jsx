import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";



const MenuCategory = ({items,title, img}) => {

    return (
        <div className="pt-8">
        { title &&  <Cover img={img} title={title}></Cover>}
              <div className="grid md:grid-cols-2 my-10">
                {
                    items.map(item =><MenuItem key={item._id} item = {item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default MenuCategory;