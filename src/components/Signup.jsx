import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const SignUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState([
        {
            name: "",
            email: "",
            age: 0,
            professional: "",
            username: "",
            password: ""
        }
    ])
 
    const handleChange = (e) => {
 
        setFormData({
            ...formData,
            [e.taget.name]: e.taget.value
        })
    }
 
    const handleNextPage = () => {
        if (step < 2) {
            setStep(step + 1)
        }
    }
 
    const handleSubmit = (e) => {
        e.preventDeafult();
        console.log("Data added Successfully!!!", formData);
 
    }
 
    const handleSignUp = () => {
        console.log('Signing up...');
        navigate('/login');
 
    };
 





return(

<div className="min-h-screen bg-gray-900 flex items-center justify-center">
 
  <div className="bg-gray-800 rounded-xl shadow-2xl p-2 w-full max-w-4xl min-h-[70vh] flex">'
  

    <div className="w-1/2 hidden md:block">
      <img src="src\assets\gomez.webp" alt="login illustration" className="w-full h-full object-cover rounded-xl" />
    </div>

    {/* Right Side: Form Section */}
    <div className="w-1/2 p-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Create Account</h2>
      <form>
        {/* Step 1: Personal Information */}
        {step === 0 && (
          <div>
            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="appearance-none border rounded w-full py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                id="age"
                value={formData.age}
                onChange={handleChange}
                name="age"
                type="number"
                placeholder="Enter your age"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="profession">
                Profession
              </label>
              <select
                className="appearance-none border rounded w-full mb-3 py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                value={formData.professional}
                onChange={handleChange}
                name="professional"
              >
                <option value="Software Engineer" className='bg-gray-700 text-white'>Choose your profession</option>
                <option value="Software Engineer" className='bg-gray-700 text-white'>Software Engineer</option>
                <option value="IT"  className='bg-gray-700 text-white' >IT</option>
                <option value="Business"  className='bg-gray-700 text-white'>Business</option>
                <option value="Artist"  className='bg-gray-700 text-white'>Artist</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Account Information */}
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="appearance-none border rounded w-full py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                name="username"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                value={formData.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-stretch-expanded mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded w-full mb-3 py-4 px-4 text-white focus:ring-2 focus:ring-gray-500 transition duration-300"
                id="confirmPassword"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        )}

        {/* Buttons to move between steps */}
        {step === 0 && (
          <div className="flex items-center justify-center">
            <button
              className="border border-gray-300 hover:cursor-pointer font-stretch-expanded text-white py-3 px-6 rounded-full w-full transition-transform duration-200 hover:scale-105"
              type="button"
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="flex items-center justify-center">
            <button
              className="border border-gray-300 hover:cursor-pointer font-stretch-expanded text-white py-3 px-6 rounded-full transition-transform duration-200 hover:scale-105 w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        )}
      </form>
    </div>
  </div>
</div>
)}
export default SignUp;



