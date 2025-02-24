

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in...');
    navigate('/twitterprofile');
  }

  return (

//     <div className="min-h-screen bg-gray-900  flex items-center justify-center">
//       <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
//               type="button"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <a href="/signup" className="text-blue-500 hover:underline cursor-pointer">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


<div className="min-h-screen bg-gray-900 flex items-center justify-center">
  <div className="bg-gray-800 rounded-xl shadow-2xl p-2 w-full max-w-4xl min-h-[70vh] flex">

    {/* Left Side: Form Section */}

    <div className="w-1/2 hidden md:block">
      <img src="src\assets\gomez.webp" alt="login illustration" className="w-full h-full object-cover rounded-xl" />
    </div>
     
     {/* Right Side: Image Section */}

    <div className="w-full md:w-1/2 p-18">
      <h2 className="text-3xl font-bold text-red-50 mb-8 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none border rounded w-full text-white py-4 px-4 focus:ring-2 focus:ring-gray-500 transition duration-300"
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-white text-lg font-stretch-expanded mb-2 mt-5" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full text-white py-4 px-4 focus:ring-2 focus:ring-gray-500 transition duration-300"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center mt-7 justify-center">
          <button
            className="border border-gray-300 hover:cursor-pointer font-stretch-expanded text-white py-3 px-6 rounded-full ftransition-transform duration-200 hover:scale-105 w-full"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          
        </div>
        <div className='flex items-center mt-4 justify-center'>
        <a href="/forgetpassword" className="text-blue-500 hover:underline cursor-pointer">
          Forget Password?
        </a>
        </div>
      </form>
      <p className="mt-4 text-white y text-center">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline cursor-pointer">
          Sign Up
        </a>
        
      </p>
    </div>

    
    
  </div>
</div>
  )}

export default Login;