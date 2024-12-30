import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {




    const navOptions = < >
        <li><NavLink className='font-bold text-base' to='/'>Home</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/allFoods'>All Foods</NavLink></li>
        <li><NavLink className='font-bold text-base' to='/gallery'>Gallery</NavLink></li>
    </>

 

   

    return (
        
            <div className="max-w-screen-xl fixed z-50  mx-auto navbar flex justify-between ">

                <div className="first">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <FaBars className="text-xl" />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className=" text-3xl font-bold">BISTRO <span className="text-red-600 font-bold">BOSS</span></Link>
                </div>
                <div>
                    <div className="second hidden md:flex">
                        <ul className="menu menu-horizontal  px-1 ">
                            {navOptions}
                        </ul>

                    </div>
                    <div className="third">

                        {/* <div className="*:font-bold">

                            {
                                user ?

                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="">
                                            <div className="flex justify-center items-center gap-2">

                                                <div className="w-12 h-12">
                                                    <img title={user.displayName} className="w-full h-full  object-contain rounded-full border  border-white border-2 hover:border-orange-400" src={user?.photoURL } alt="profile" />
                                                </div>
                                            </div>

                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 right-3 shadow ">
                                            {navOptions2}
                                        </ul>
                                    </div>


                                    :
                                    <div>
                                        <Link className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/login' >Login</Link>
                                        <span> / </span>
                                        <Link className="hover:underline  decoration-2 underline-offset-2 font-bold" to='/register' >Register</Link>
                                    </div>
                            }


                        </div> */}
                        <button>Hello</button>
                    </div>
                </div>
            </div>

    );
};

export default Navbar;