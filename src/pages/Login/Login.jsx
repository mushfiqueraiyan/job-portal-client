import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router";

const Login = () => {
  const [error, setError] = useState("");

  const { setUser, googleLogin, login } = use(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div className=" mt-50 flex items-center justify-center  ">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h2>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                name="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                name="password"
              />
              <label className="label">
                <span className="label-text-alt link link-hover text-sm text-blue-500">
                  Forgot password?
                </span>
              </label>
            </div>

            <div className="form-control">
              <button className="btn text-white bg-blue-700 w-full">
                Login
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error.message}</p>
            )}
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have any account?{" "}
            <Link to={"/register"} className="link link-hover text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
