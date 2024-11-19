import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
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

  return (
    <div>
      <div className="card bg-base-100 w-11/12 mx-auto mt-10 py-7 text-center shadow-2xl">
        <h1 className="text-3xl font-bold">Register Now</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
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
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash /> } 
              </span>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
