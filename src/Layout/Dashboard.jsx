import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    const [cart] = useCart()
    // todo ; get admin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard sidebar  */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>

                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils> Add Items</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList></FaList>
                                        Manage Item</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook></FaBook>
                                        Manage Bookings</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/users'>
                                        <FaUser></FaUser>
                                        All Users</NavLink>
                                </li>

                            </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>My Cart{cart.length}</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'>
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>

                    }
                    {/* // shared navlink  */}
                    <div className="divider">OR</div>
                    <li>

                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/search'>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;