import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  email,
		  password,
		}),
	  });
	  const data = res.json();
	  if (res.status === 422 || !data) {
		window.alert("One or more fields are empty!!");
	  } 
	  else if (res.status === 400) {
		window.alert("Invalid Credentials!!");
	  } 
	  else {
		window.alert("Successful Login!!");
		navigate("/dashboard");
	  }
	
  };



  return (
    <>
      <form className='relative text-black bg-gray-200 py-32 lg:px-12 rounded-xl'>
        <div className='text-center px-10'>
          <p className=' text-3xl uppercase'>LOGIN</p>
          <p className='tracking-wider font-light mt-5'>
            Enter your username and password
          </p>
        </div>
        <ul className=' w-full flex flex-col justify-center items-center text-center mt-24 gap-8'>
          <li className='w-full px-10  space-y-2'>
            <label htmlFor='username' className='font-light tracking-widest'>
              Enter Username
            </label>
            <input
              id='username'
              name='username'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-center w-full h-12 tracking-widest font-light text-lg outline-none rounded-md px-4'
              placeholder='username'
            />
          </li>
          <li className='w-full px-10  space-y-2'>
            <label htmlFor='password' className='font-light tracking-widest'>
              Enter Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-12 tracking-widest font-light text-lg outline-none rounded-md text-center px-4'
              placeholder='password'
            />
          </li>
          <li className='w-full px-10 button'>
            <div className='w-full h-12 text-lg outline-none bg-stone-900 border border-stone-100 border-inset text-white rounded-md px-4 overflow-hidden'>
              <button
                onClick={handleLogin}
                className={
                  "  w-full h-full  flex items-center  justify-center"
                }>
                Login
              </button>
            </div>
          </li>
          <li className='w-full px-6 text-center  '>
            <p>Have trouble logging in?</p>
          </li>
          <li className='w-full px-6 text-center'>
            <p className='font-light'>
              Have an Invitation?{" "}
              <NavLink to='/register' className='font-normal text-blue-600'>
                Join Here
              </NavLink>
            </p>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Login;
