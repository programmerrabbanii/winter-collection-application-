import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault()
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        console.log(name,email,password,photo);
    }

  return (
    <div>
          <div className="card bg-base-100 w-11/12  mx-auto mt-10 py-7 text-center shrink-0 shadow-2xl">
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
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="PhotoURL"
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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p>
              already have a account go to <Link to="/login">Login</Link>
            </p>
          </div>
        </div>

  );
};

export default Register;
