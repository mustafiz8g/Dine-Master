
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                console.log('google sign in', result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        title: "Login Successful",
                        icon: "success",
                    });
                    navigate(from)
                })
            })



    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;