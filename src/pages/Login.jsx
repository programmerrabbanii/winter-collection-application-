import { Link } from "react-router-dom";

const Login = () => {
  const handlerLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password);
  };

  return (
    <div>
      
          <div className="card bg-base-100 w-11/12 mt-11 py-8 mx-auto text-center  shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold">Login now!</h1>
            <form onSubmit={handlerLogin} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>


            <p>
              new to this website pleass <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      
  );
};

export default Login;
