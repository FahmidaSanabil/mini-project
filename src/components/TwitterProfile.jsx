import React from 'react';
import { useState } from 'react';


function TwitterProfile() {
    const tweets = [
        'This is my first tweet! #react #tailwindcss',
        'Having a great day! #coding #javascript',
        'Learning new things every day.',
        'Just finished a coding challenge.',
        'Enjoying the weekend!',
        'Exploring new technologies.',
        'Coffe  e break! ☕',
        'Working on a new project.',
        'Hello, world!',
        'Another day, another line of code.',
        'Feeling productive today.',
        'Just pushed a new feature.',
        'Debugging is fun! (Sometimes...)',
      ];


      const [showMoreFollowers, setShowMoreFollowers] = useState(false);
  const initialFollowers = [
    { name: 'TIMES OF INDIA', username: '@timesofindia', avatar: 'src\assets\times of india.jpg' },
    // Add more initial followers here
  ];
  const additionalFollowers = [
    { name: 'Meowww (Cat Lover)', username: '@meoww', avatar: 'src\assets\cat.jpg' },
    { name: 'BBC News', username: '@bbcnews', avatar: 'src\assets\bbc.png' },
    { name: 'National Geographic', username: '@NatGeo', avatar: 'src\assets\profile-3.jpg' },
    // Add more followers here
  ];
  
  const followers = showMoreFollowers
    ? [...initialFollowers, ...additionalFollowers]
    : initialFollowers;
  const toggleShowMoreFollowers = () => {
    setShowMoreFollowers(!showMoreFollowers);
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Top Bar */}
      <div className="bg-black p-4 flex items-center justify-between">
      
            
          <div>
          <h2 className="text-lg font-semibold">ZARA</h2>
          <span className="text-gray-500">22 posts</span>
          </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="            Q Search"
            className="bg-gray-800 rounded-full px-20 py-3 text-md focus:outline-none"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section (Profile Details) */}
        <div className="w-full md:w-[60%] md:pr-2 mb-4 md:mb-0">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="relative">
              <div className="h-57 bg-gray-700 rounded-lg  overflow-hidden hover:scale-105">
              <img
              src="src\assets\cover image.jpg" // Replace with your cover photo URL
              alt="Cover"
              className="w-full h-full object-cover"/>    
                {/* Cover Image Placeholder */}
              </div>

              

              
              <div className="absolute -mt-15 left-4">
                <img
                  src="src\assets\profile-1.jpg" // Replace with your profile picture URL
                  alt="Profile"
                  className="w-30 h-30 rounded-full border-4 border-gray-900"
                />
              </div>
            </div>

            <div className="mt-17">
              <h2 className="text-lg font-semibold px-4  flex">ZARA
               <button className="border border-gray-300 border-shadow-lg rounded-full space-y-4 px-3 text-xs">
                Get verified
              </button>
              </h2>
              <p className="text-gray-300 pl-3">@zara_22</p>
              <p className="text-gray-300 pl-3 mt-2">Joined September 2023</p>
              <div className="flex mt-2 ">

              <div className="mr-4 text-white">
              <span className="font-semibold block pl-7 text-sm">456</span>
              <span className="block hover:cursor-pointer pl-3 text-sm">Followers</span>
            </div>
            <div className="mr-4 text-white">
              <span className="font-semibold block pl-4 text-sm">300</span>
              <span className="block hover:cursor-pointer text-sm">Following</span>
            </div>
                {/* <p className="mr-4 hover:cursor-pointer">0 Following</p>
                <p className='hover:cursor-pointer'>0 Followers</p> */}
              </div>

              <button className="mt-4 border border-gray-300  hover:cursor-pointer text-white rounded-full px-4 py-2 w-full">
                Edit profile
              </button>
              <div className="mt-4 flex justify-around">
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Posts</button>
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Replies</button>
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Highlights</button>
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Articles</button>
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Media</button>
                <button className="text-sm  hover:border-b-4 hover:border-blue-500">Likes</button>
              </div>
              <hr className="border-t border-gray-700 my-4" />


              <div className="grid grid-cols-1 gap-6 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-4">
              {/* Post Image */}
              <img
                src={`src\assets\profile-${i}.jpg`} // Assuming images are named profile-0.jpeg, profile-1.jpeg, etc.
                alt="Post"
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Post Details */}
              <div className="mt-4 flex justify-between items-center">
                {/* {/* User Profile and Name */}
                <div className="flex items-center">
                   <img
                    src='src\assets\profile-1.jpg' // Assuming images are named posts-0.jpeg, posts-1.jpeg, etc.
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-blue-500"></img>
                  <h3 className="ml-2 text-md text-black font-semibold">{tweets[i]}</h3>
                </div> 

                {/* Like and Comment Icons */}
                <div className="flex items-center space-x-4">
                  <i className="ri-heart-line text-gray-400"></i>
                  <span className="text-gray-400">74.8k</span>
                  <i className="ri-chat-3-line text-gray-400"></i>
                  <span className="text-gray-400">1.9k</span>
                </div>
              </div>
            </div>
          ))}
        </div>
              
            </div>
          </div>
          </div>

        {/* Middle Section (What's happening) */}
        <div className="w-full md:w-1/2 md:px-4 mb-4 md:mb-0">

        {/* <div className="mt-4">
                <h3 className="font-semibold text-lg">Who to follow</h3>
                
                <div className="flex items-center mt-2">
                  <img
                    src="src\assets\profile-2.jpg" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-11 h-12 rounded-full mr-2"
                  />
                  <div>
                    <h4 className="font-semibold hover:cursor-pointer text-md">Meowwww (Cat Lover)</h4>
                    <p className="text-gray-500 text-sm">@meowkuttyy</p>
                  </div>
                  <button className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 text-sm ml-auto">
                    Follow
                  </button>
                </div>

                <div className="flex items-center mt-2">
                  <img
                    src="src\assets\bbc.png" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-11 h-12 rounded-full mr-2"
                  />
                  <div>
                    <h4 className="font-semibold hover:cursor-pointer text-md">BBC NEWS</h4>
                    <p className="text-gray-500 text-sm">@bbcnwes</p>
                  </div>
                  <button className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 text-sm ml-auto">
                    Follow
                  </button>
                </div>

                <div className="flex items-center mt-2">
                  <img
                    src="src\assets\times of india.jpg" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-11 h-12 rounded-full mr-2"
                  />
                  <div>
                    <h4 className="font-semibold  hover:cursor-pointer text-md">TIMES OF INDIA</h4>
                    <p className="text-gray-500 text-sm">@timesofindia</p>
                  </div>
                  <button className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 text-sm ml-auto">
                    Follow
                  </button>
                </div>

                <button className="mt-2 text-blue-500 hover:cursor-pointer hover:border-blue-500 text-sm">Show more</button>
              </div> */}


<div className="mt-4">
        <h3 className="font-semibold text-lg">Who to follow</h3>
        {followers.map((follower, index) => (
          <div key={index} className="flex items-center mt-2">
            <img
              src={follower.avatar}
              alt={follower.name}
              className="w-11 h-12 rounded-full mr-2"
            />
            <div>
              <h4 className="font-semibold hover:cursor-pointer text-md">
                {follower.name}
              </h4>
              <p className="text-gray-500 text-sm">{follower.username}</p>
            </div>
            <button className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 text-sm ml-auto">
              Follow
            </button>
          </div>
        ))}
        <button
          className="mt-2 text-blue-500 hover:cursor-pointer hover:border-blue-500 text-sm"
          onClick={toggleShowMoreFollowers}
        >
          {showMoreFollowers ? 'Show less' : 'Show more'}
        </button>
      </div>

      <div className="mt-2">
          <div className="bg-gray-800 mt-4 rounded-lg p-4">
          <h3 className="font-semibold text-lg">What's happening</h3>
          <div className="flex items-center mt-2">
                  <img
                    src="src\assets\cat.jpg" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-14 h-12 rounded-sm mr-2"
                  />
                  <div className='pl-2'>
                    <h4 className="font-semibold text-md">GROK 3</h4>
                    <p className="text-gray-500 text-sm">Grok 3 is here. Try it for free.</p>
                    <p className="text-green-500">LIVE</p>
            </div>   
            </div>
            <hr className="border-t border-gray-700 my-4" />

            <div className="flex items-center mt-2">
                  <img
                    src="src\assets\BTS.avif" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-14 h-12 rounded-sm mr-2"
                  />
                  <div className='pl-2'>
                    <h4 className="font-semibold text-md">BTS 3</h4>
                    <p className="text-gray-500 text-sm">BTS in India.</p>
                    <p className="text-green-500">LIVE</p>
            </div>   
            </div>
            <hr className="border-t border-gray-700 my-4" />

            <div className="flex items-center mt-2">
                  <img
                    src="src\assets\gomez.webp" // Replace with AK Kutty avatar URL
                    alt="AK Kutty"
                    className="w-14 h-12 rounded-sm mr-2"
                  />
                  <div className='pl-2'>
                    <h4 className="font-semibold text-md">SELENA GOMEZ</h4>
                    <p className="text-gray-500 text-sm">Gomez is here!.</p>
                    <p className="text-green-500">LIVE</p>
            </div>
                  
            </div>

            </div>
            </div>

            <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <h4 className="text-gray-300">Trending in India</h4>
              <p className="font-semibold text-lg">#PoonamPandey</p>
              <p className="text-gray-300">12.7K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Trending in USA</p>
              <p className=" font-semibold text-lg">#TheProudFamily</p>
              <p className="text-gray-300">20.6K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Trending in USA</p>
              <p className="font- text-lg">#TongueOutTuesday</p>
              <p className="text-gray-300">5,846K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Entertainment Trending</p>
              <p className="font-semibold text-lg">#GoodBadUgly</p>
              <p className="text-gray-300">22.5K Tweets</p>
            </div>


            {/* <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <h4 className="text-gray-300">Trending in India</h4>
              <p className="font-semibold text-lg">#PoonamPandey</p>
              <p className="text-gray-300">12.7K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Trending in USA</p>
              <p className=" font-semibold text-lg">#TheProudFamily</p>
              <p className="text-gray-300">20.6K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Trending in USA</p>
              <p className="font- text-lg">#TongueOutTuesday</p>
              <p className="text-gray-300">5,846K Tweets</p>
              <hr className="border-t border-gray-700 my-4" />
              <p className="text-gray-300">Entertainment Trending</p>
              <p className="font-semibold text-lg">#GoodBadUgly</p>
              <p className="text-gray-300">22.5K Tweets</p>
            </div> */}
          
      </div>
      </div>
    </div>
  );
}

export default TwitterProfile;
