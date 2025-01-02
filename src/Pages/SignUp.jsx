
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            title: "SignUp Successful",
                            icon: "success"
                        });
                        navigate(from)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })


    }


    return (
        <>
            <Helmet>
                <title>Dile Master | SignUp</title>
            </Helmet>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[340px]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            name="name"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                        />
                        {errors.name && <span className="text-error">Name is required</span>}


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input
                            {...register("photoURL", { required: true })}

                            type="text"
                            placeholder="photo URL"
                            className="input input-bordered"
                        />
                        {errors.name && <span className="text-error">Photo URL is required</span>}


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                        />
                        {errors.email && <span className="text-error">This field is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        {errors.password?.type === 'required' && <span className="text-error">This field is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-error">Password must be at least 6 character</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-error">password must be  less 20 character</span>}
                        {errors.password?.type === 'pattern' && <span className="text-error">password must have one uppercase one lower case one special character</span>}


                    </div>
                    <input type="submit" value='SignUp' className="btn btn-primary  text-[16px] w-full" />

                </form>
                <div>
                    <p className="text-[14px] mt-3">Already have an Account? <Link to="/login"><button className="link link-info font-bold">Login</button>
                    </Link></p>
                </div>
                <div className="divider"><small>OR</small></div>
            </div>
        </>
    );
};

export default SignUp;





// reset   due












// import { useState } from "react";
// import { FaEyeSlash } from "react-icons/fa";
// import { MdRemoveRedEye } from "react-icons/md";
// import { Link } from "react-router-dom";

// import useAuth from "../hooks/useAuth";
// import { useForm } from "react-hook-form";

// const SignUp = () => {
//     const { createUser } = useAuth();
//     const [showPassword, setShowPassword] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//         const { email, password } = data;

//         createUser(email, password)
//             .then((result) => {
//                 console.log("User created:", result.user);
//             })
//             .catch((error) => {
//                 console.error("Error creating user:", error);
//             });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)} className="w-[340px]">
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Name</span>
//                     </label>
//                     <input
//                         {...register("name", { required: "Name is required" })}
//                         type="text"
//                         placeholder="name"
//                         className="input input-bordered"
//                     />
//                     {errors.name && (
//                         <p className="text-error text-sm">{errors.name.message}</p>
//                     )}
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Email</span>
//                     </label>
//                     <input
//                         {...register("email", {
//                             required: "Email is required",
//                             pattern: {
//                                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                                 message: "Invalid email format",
//                             },
//                         })}
//                         type="email"
//                         placeholder="email"
//                         className="input input-bordered"
//                     />
//                     {errors.email && (
//                         <p className="text-error text-sm">{errors.email.message}</p>
//                     )}
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Password</span>
//                     </label>
//                     <input
//                         {...register("password", {
//                             required: "Password is required",
//                             minLength: {
//                                 value: 6,
//                                 message: "Password must be at least 6 characters",
//                             },
//                             pattern: {
//                                 value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
//                                 message: "Password must include uppercase and lowercase letters",
//                             },
//                         })}
//                         type={showPassword ? "text" : "password"}
//                         placeholder="password"
//                         className="input input-bordered"
//                     />
//                     <div
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="relative w-6 left-[300px] bottom-8 cursor-pointer"
//                     >
//                         {showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />}
//                     </div>
//                     {errors.password && (
//                         <p className="text-error text-sm">{errors.password.message}</p>
//                     )}
//                 </div>

//                 <div className="form-control mt-4">
//                     <button className="btn btn-primary text-[16px]">Sign Up</button>
//                 </div>

//                 <div>
//                     <p className="text-[14px] mt-3">
//                         Already have an Account?{" "}
//                         <Link to="/login">
//                             <button className="link link-info font-bold">Login</button>
//                         </Link>
//                     </p>
//                 </div>
//                 <div className="divider">
//                     <small>OR</small>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;
