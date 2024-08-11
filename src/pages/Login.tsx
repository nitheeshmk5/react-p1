import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div className="text-center m-2">
      <h1 className="text-3xl">Login page</h1>
      <h1>Click this to Sign up with Google</h1>
      <button
        onClick={signInWithGoogle}
        className="bg-gray-500 border-2 rounded-md text-white p-2"
      >
        Sign up with google
      </button>
    </div>
  );
};

export default Login;
