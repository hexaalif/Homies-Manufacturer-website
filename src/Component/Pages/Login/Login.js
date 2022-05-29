import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, userGoogle, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  let errorMassage;

  if(loading || Gloading){
    return <Loading></Loading>
  }

  if(error || Gerror){
      errorMassage = <p class="text-red-500">{error?.massage || Gerror?.message}</p>
  }

  if (user || userGoogle) {
    navigate('/')
    console.log(user || userGoogle);
  }

  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl text-center font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* email field start  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type email here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a True Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
              </div>

              {/* password field  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type password here"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
              </div>

              {errorMassage}    
              <input className="btn w-full max-w-xs text-white" type="submit" value="Login"/>
            </form>
            <p><small>Not have an Account? <Link className="text-primary" to="/signup">Create Account</Link></small></p>

            <div className="divider">OR</div>

            {/* google login part */}
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
