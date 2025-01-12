import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";



const FoodCard = ({item}) => {
    const { image, price, recipe, name, _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleAddToCart = () => {
      if(user && user.email){
        //send cart item to the database
        // console.log(user.email,food)

        const cartItem = {
          menuId: _id, 
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${name} added to your card`,
              showConfirmButton: false,
              timer: 1500
            });
            //refetch the cartt to update the items cart count
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login to add the the cart',
          text: "Please login to add to the cart?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: "#3086d6",
          cancelButtonColor: '#d33',
          confirmButtonText: "yes, Login!"
        }).then((result) => {
          if(result.isConfirmed){
           //send the user to the login page
           navigate('/login',{state: {from: location}} )
          }
        })
      }
    }

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-800 absolute right-0 mr-4 mt-4 px-2 rounded-md text-white" >${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;