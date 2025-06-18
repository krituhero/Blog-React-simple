import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
          <img src="https://picsum.photos/800" alt="Card Image" className="w-full h-auto object-cover rounded-md"/>
          <div className="inline-block mt-4 bg-blue-300 text-white text-sm px-3 py-1 rounded-full">Technology</div>
          <h2 className="mt-4 text-lg font-semibold text-gray-800">The Future of AI in Modern Life</h2>
          <p className="pl-2 text-gray-600 mt-4 font-medium">
            Tracey Wilson
            <span className="pl-8 font-thin">August 20, 2025</span>
          </p>
    </div>
  )
}

export default Card