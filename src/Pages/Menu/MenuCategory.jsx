import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";



const MenuCategory = ({items,title, img}) => {

    return (
        <div className="pt-8">
        { title &&  <Cover img={img} title={title}></Cover>}
              <div className="grid md:grid-cols-2 my-10">
                {
                    items.map(item =><MenuItem key={item._id} item = {item}></MenuItem> )
                }
            </div>
            <Link 
             to={`/order/${title}`}
            ><button className="btn btn-outline  border-0 border-b-4">Order now</button></Link>
        </div>
    );
};

export default MenuCategory;