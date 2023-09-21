import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginWithEmail, startGoogle, startResetingPassword } from "../store/slices/auth/thunks";
import { useForm } from "../hooks/useForm";
import { GoogleIcon, Loader, LoaderProgress } from "../icons";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [resetPass, setresetPass] = useState(false);

  const { user, status, errorMessage, resetPasswordMessage } = useSelector(
    (state) => state.auth
  );
  const { email, password, emailReset, onInputChange } = useForm({
    email: "",
    password: "",
    emailReset: "",
  });
  

 

  const isAuth = useMemo(() => status === 'checking', [status]);
  // console.log(isAuth);
  
  useEffect(() => {
    if ( status === 'online') 
    navigate('/')
  }, [isAuth])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginWithEmail(email, password));
    
  }
    
  const onGoogle = () => {
    dispatch(startGoogle()) 
  };

  const submitResetPass = (event) => {
    event.preventDefault()
    dispatch(startResetingPassword(emailReset))
    
  } 

  return (
    <main className="layoutBase">
      <h1 className="sectionTitle">Welcome!</h1>
      <section className="flex flex-col h-full w-full justify-center items-center">
        <div className="flex flex-col gap-4  shadow-lg h-full w-[400px] border border-r-red-200/70 border-t-red-200/70 rounded-xl  px-6  ">
          <form
            className="h-full py-8 flex flex-col gap-4 justify-between"
            onSubmit={onSubmit}
          >
            <div>
              <label htmlFor="">User</label>
              <input
                className="w-full h-10 px-4 mb-2 rounded-md bg-gray-200/60 shadow-inner"
                type="email"
                placeholder="johndoe2@shopi.com"
                name="email"
                value={email}
                onChange={onInputChange}
              />
              <label htmlFor="">Password</label>
              <input
                className="w-full h-10 px-4 rounded-md text-xl bg-gray-200/50 shadow-inner"
                type="password"
                placeholder="••••••••"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>

            {isAuth ? (
              <div className="flex gap-2 items-center bg-teal-100/70 py-2 px-3 rounded-lg">
                <span className="relative flex items-center justify-center">
                  <Loader className={"w-6 fill-green-300"} />
                  <LoaderProgress
                    className={"w-7 absolute fill-green-700/70 animate-spin"}
                  />
                </span>
                Checking...
              </div>
            ) : (
              ""
            )}
            {errorMessage && !isAuth ? (
              <p className="text-sm bg-red-300/70 py-2 px-3 rounded-lg">
                {errorMessage}
              </p>
            ) : (
              ""
            )}

            <div className="flex flex-col gap-3 items-end">
              <div className="flex gap-4 justify-end w-full">
                <button
                  disabled={isAuth}
                  className="bg-gray-800 flex justify-center items-center gap-2 py-2 w-[38%] h-12 px-4 rounded-lg shadow-md text-white transition 
                enabled:hover:scale-110 enabled:hover:bg-white enabled:hover:border enabled:hover:border-gray-800 enabled:hover:text-gray-800
                disabled:opacity-40"
                  onClick={onGoogle}
                  type="button"
                >
                  <GoogleIcon className="w-6" />
                  Google
                </button>
                <button
                  disabled={isAuth}
                  className="bg-teal-500 py-2 px-4 h-12 w-[31%] rounded-lg shadow-md text-white transition 
                enabled:hover:scale-110 enabled:hover:bg-white enabled:hover:border enabled:hover:border-teal-500 enabled:hover:text-teal-500
                disabled:opacity-40"
                  type="submit"
                >
                  Login
                </button>
                <button
                  disabled={isAuth}
                  className="bg-teal-300 py-2 px-4 h-12 w-[31%] rounded-lg shadow-md text-white transition 
                enabled:hover:scale-110 enabled:hover:bg-white enabled:hover:border enabled:hover:border-teal-300 enabled:hover:text-teal-300
                disabled:opacity-40"
                  type="button"
                >
                  <Link to="/sign-up">Sign up</Link>
                </button>
              </div>
              <p className="text-sm text-teal-700">
                Forogot your password?{" "}
                <span
                  className="underline decoration-1 text-teal-500 font-medium hover:text-red-500 cursor-pointer"
                  onClick={() => setresetPass(true)}
                >
                  Reset password
                </span>
              </p>
            </div>
          </form>
          {resetPass ? (
            <form className="w-full mb-4" onSubmit={submitResetPass}>
              <label htmlFor="emailReset" className="">
                Email
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="johndoe2@shopi.com"
                  name="emailReset"
                  value={emailReset}
                  onChange={onInputChange}
                  className="w-full text-sm h-10 px-4 rounded-md bg-gray-200/50 shadow-inner"
                />
                {resetPasswordMessage ? (
                  <p className="text-sm bg-gray-300/70 py-2 px-3 rounded-lg">
                    {resetPasswordMessage}
                  </p>
                ) : (
                  ""
                )}
                <button
                  className="bg-teal-600 py-2 px-4 h-12 w-full rounded-lg shadow-md text-white transition 
                enabled:hover:scale-110 enabled:hover:bg-white enabled:hover:border enabled:hover:border-teal-300 enabled:hover:text-teal-300
                disabled:opacity-40"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};
