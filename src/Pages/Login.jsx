import { useEffect, useRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Login = () => {


    useEffect(() => {
       
            loadCaptchaEnginge(6); 
        
    },[])
  

    const [showPassword, setShowPassword] = useState(false);
    const [successSMS, setSuccessSMS] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true)



    const emailRef = useRef();
    const captchaRef = useRef(null);

  
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)


        setSuccessSMS('')
        setError('')
        if (password.length < 6) {
            setError('password should be 6 cahharacters or longer')
            return;
        }
        const passwordRegexU = /^(?=.*[A-Z]).+$/
        const passwordRegexL = /^(?=.*[a-z]).+$/
    
        if (!passwordRegexU.test(password)) {
            setError('At least one Caracter Uppercase')
            return;
        }
        if (!passwordRegexL.test(password)) {
            setError('At least one Caracter Lowercase')
            return;
        }

        //password validation
        //show password validation error
        

    }



    const handlePassword = ev => {
        ev.preventDefault();
        const newPassword = ev.target.value;
        setError('')
        setSuccessSMS('')
        //password validation 

        if (newPassword.length <= 6) {
            setError('password should be 6 cahharacters or longer')

        }
        const passwordRegexU = /^(?=.*[A-Z]).+$/
        const passwordRegexL = /^(?=.*[a-z]).+$/
        if (!passwordRegexU.test(newPassword)) {
            setError('At least one Caracter Uppercase')

        }
        if (!passwordRegexL.test(newPassword)) {
            setError('At least one Caracter Lowercase')

        }
        if (newPassword.length > 6 && passwordRegexU.test(newPassword) && passwordRegexL.test(newPassword)) {
            setSuccessSMS('strong')
        }


    }
    const handlevalidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }  
        else{
            setDisabled(true)
        }
    }


    return (
        <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-center items-center">

            <div>
            <form onSubmit={handleLogin} className="w-[340px]">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        ref={emailRef}
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handlePassword}

                        placeholder="password"
                        className="input input-bordered"
                        required
                    // autoComplete="current-password"

                    />
                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="relative w-6 left-[300px] bottom-8">
                        {
                            showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />
                        }
                    </div>
                    <div className="form-control ">
                        <p className="text-sm text-success">{successSMS}</p>
                        <p className="text-sm text-error">{error}</p>

                    </div>
                    <label  className="label">
                        <a className="label-text-alt link link-hover">Forgot password?</a>
                    </label>

                </div>
                {/* captcha  */}
                <div className="form-control">
                    <label className="label">
                   
        <LoadCanvasTemplate />
       
                    </label>
                    <input
                        name=""
                        type="text"
                        ref={captchaRef}
                        placeholder="type the captcha above"
                        className="input input-bordered"
                        required />
                        <button 
                        onClick={handlevalidate}
                        className="btn btn-xs btn-outline mt-2">Validate</button>
                </div>

                <div className="form-control mt-4">
                    <button disabled = {disabled} className="btn btn-primary  text-[16px]">Login</button>
                </div>

                <div>
                    <p className="text-[14px] mt-3">dont have Account ? <Link to="/register"><button className="link link-info font-bold">Register</button>
                    </Link></p>
                </div>
                <div className="divider"><small>OR</small></div>

                


            </form>
          
            </div>


            <div className=" ">
             
            </div>
        </div>
    );
};

export default Login;     