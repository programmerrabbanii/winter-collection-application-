import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { IoLogoGoogleplus } from "react-icons/io";

const Login = () => {
  const { signinUser,loginGoogle } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleLogin = (e) => { 
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    setLoading(true);
    signinUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/"); 
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(() => {
        toast.success("Login successful!");
        navigate("/"); 
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-11/12 mx-auto mt-10 py-7 text-center shadow-2xl">
        <h1 className="text-3xl font-bold">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </span> 
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className=" rounded-sm text-lg bg-orange-300 text-white py-3">
              {loading ? "Logging in..." : "Login"} 
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-3">
          <IoLogoGoogleplus className="text-red-500 text-3xl" />
          <button
            onClick={handleGoogleLogin}
            className="bg-orange-300 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Login With Google  
          </button> 
        </div>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
