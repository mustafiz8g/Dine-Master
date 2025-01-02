
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const location  = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            console.log('google sign in', result.user);
            Swal.fire({
                title: "Login Successful",
                icon: "success",
            });
            navigate(from)
        } catch (error) {
            Swal.fire({
                title: "Login Failed",
                text: error.message,
                icon: "error",
            });
        }
    };
    
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;