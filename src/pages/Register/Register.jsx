import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";

const Register = () => {
  const { setUser, googleLogin, createWithEmail } = use(AuthContext);
  const [error, setError] = useState("");

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const { email, password, ...restData } = Object.fromEntries(
      formData.entries()
    );

    console.log(restData);

    createWithEmail(email, password)
      .then((res) => {
        const profileInfo = {
          displayName: formData.get("name"),
          photoURL: formData.get("profile"),
        };

        updateProfile(auth.currentUser, profileInfo)
          .then(() => {})
          .catch((err) => {
            setError(err.message);
          });

        setUser(res.user);
      })
      .catch((err) => setError(err.message));
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
      <div className=" flex items-center justify-center mt-40">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Register
          </h2>

          <form onSubmit={handleSubmitRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile URL</span>
              </label>
              <input
                type="text"
                placeholder="https://yourprofile.com"
                className="input input-bordered w-full"
                name="profile"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
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
                required
                name="password"
              />
            </div>

            <div className="form-control">
              <button className="btn text-white bg-blue-700 w-full">
                Register
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

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
            Already have an account?{" "}
            <Link to={"/login"} className="link link-hover text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
