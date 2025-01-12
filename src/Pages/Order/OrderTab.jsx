
import FoodCard from "../../Components/FoodCard";

const OrderTab = ({items}) => {
    // console.log(items)
    return (
        <div className='grid md:grid-cols-3'>
            {
                items.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;