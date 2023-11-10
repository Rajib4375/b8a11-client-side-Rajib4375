import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
  
  const {signIn} = useContext(AuthContext);

 
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successfull",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => {
          console.log(error)
          
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please Try Again",
            showConfirmButton: false,
            timer: 1500
          });
        })
        
    }

    const Auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
      signInWithPopup(Auth, provider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.log('error', error.message)
      })
    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row w-full">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body ">
      <h1 className="text-4xl text-center font-bold ">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control ">
          
          <input className="btn btn-primary" type="submit" value="Login" />
          <p className="text-xl text-center mt-2">or</p>
          
        </div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary"> <FcGoogle></FcGoogle> Continue With Google</button>
      </form>
      <p className="my-6 text-center">Have an Account <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
    </div>
   </div>
   </div>
    );
};

export default Login;
