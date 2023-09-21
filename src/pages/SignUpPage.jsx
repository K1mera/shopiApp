import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCreateUser } from "../store/slices/auth/thunks";
import { useForm } from "../hooks/useForm";

import { Link, useNavigate } from "react-router-dom";

const formValidations = {
  email: [(value) => value.includes("@") && value.includes('.com'), "Email is not valid."],
  password: [(value) => value.length >= 6, "Password must be greater than 6."],
  displayName: [(value) => value.length >= 1, "Name is required."],
};

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formSubmitted, setformSubmitted] = useState(false)
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const {
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    passwordValid,
    emailValid,
    isFormValid,
  } = useForm(
    {
      displayName: "",
      email: "",
      password: "",
    },
    formValidations
  );

 const isAuth = useMemo(() => status === 'checking', [status]);

  useEffect(() => {
    if (status === "online") navigate("/");
  }, [isAuth]);


  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true)
    
    if ( !isFormValid ) return

    dispatch(startCreateUser(displayName, email, password))
    
    
  };


  return (
    <main className="layoutBase">
      <h1 className="sectionTitle">Welcome!</h1>
      <section className="flex flex-col h-full w-full justify-center items-center">
        <div className="flex flex-col gap-4  shadow-lg h-[410px] w-[400px] border border-r-red-200/70 border-t-red-200/70 rounded-xl  px-6  ">
          <form
            className="h-full py-6 flex flex-col gap-4 justify-between"
            onSubmit={onSubmit}
          >
            <div>
              <label
                htmlFor="displayName"
                className={` ${
                  displayNameValid && formSubmitted
                    ? "text-red-500 font-medium"
                    : "text-black"
                }`}
              >
                Name
              </label>
              <div className="relative mb-3">
                <input
                  className={`w-full h-10 px-4 mb-2 rounded-md bg-gray-200/60 shadow-inner ${
                    displayNameValid && formSubmitted ? "invalidInput" : ""
                  }`}
                  type="text"
                  placeholder="John Doe"
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                />
                {displayNameValid && formSubmitted ? (
                  <p className="text-sm font-medium text-red-400 absolute top-10 left-0 px-2">
                    {displayNameValid}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <label
                htmlFor="email"
                className={` ${
                  emailValid && formSubmitted
                    ? "text-red-500 font-medium"
                    : "text-black"
                }`}
              >
                Email
              </label>
              <div className="relative mb-3">
                <input
                  className={`w-full h-10 px-4 mb-2 rounded-md bg-gray-200/60 shadow-inner ${
                    emailValid && formSubmitted ? "invalidInput" : ""
                  }`}
                  type="text"
                  placeholder="johndoe2@shopi.com"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                {emailValid && formSubmitted ? (
                  <p className="text-sm font-medium text-red-400 absolute top-10 left-0 px-2">
                    {emailValid}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <label
                htmlFor="password"
                className={` ${
                  passwordValid && formSubmitted
                    ? "text-red-500 font-medium"
                    : "text-black"
                }`}
              >
                Password
              </label>
              <div className="relative mb-3">
                <input
                  className={`w-full h-10 px-4 mb-2 rounded-md bg-gray-200/60 shadow-inner ${
                    passwordValid && formSubmitted ? "invalidInput" : ""
                  }`}
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
                {passwordValid && formSubmitted ? (
                  <p className="text-sm font-medium text-red-400 absolute top-10 left-0 px-2">
                    {passwordValid}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {errorMessage ? (
              <p className="text-sm bg-red-300/70 py-2 px-3 rounded-lg">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-2 justify-end items-end w-full">
              <button
                disabled={!isFormValid && formSubmitted}
                className="bg-teal-400 py-2 px-4 h-12 w-[50%] rounded-lg shadow-md text-white transition 
                enabled:hover:scale-110 enabled:hover:bg-white enabled:hover:border enabled:hover:border-teal-400 enabled:hover:text-teal-400
                disabled:opacity-40 "
                type="submit"
              >
                Create account
              </button>
              <p className="text-sm text-teal-700">
                Do you already have an account?{" "}
                <Link
                  className="underline decoration-1 text-teal-500 font-medium hover:text-red-500"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
