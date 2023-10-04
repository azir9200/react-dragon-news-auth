import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    //create user
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center ">Please Register Here</h2>

        <form onClick={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto" >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="Name" name="name" placeholder="name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="Name" name="photo" placeholder="photo" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="Password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>

        </form>
        <p className="text-center mt-4" >Already have an account ? Please dive in to.. <Link className="text-blue-900 font-extrabold" to='/login' >Login</Link> </p>
      </div>

    </div>
  );
};

export default Register;