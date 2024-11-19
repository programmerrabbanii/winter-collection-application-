import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const Register = () => {
  const { createUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate(); // for navigation
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must include at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must include at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password, { name, photo })
      .then(() => {
        toast.success("Registration successful!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(() => {
        toast.success("Login successful!");
        navigate("/"); // redirect to home after successful Google login
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-white w-11/12 mx-auto p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register Now</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-gray-700">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-2 my-6">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="text-gray-500">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <IoLogoGoogleplus className="text-red-500 text-3xl" />
          <button
            onClick={handleGoogleLogin}
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Login With Google
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
