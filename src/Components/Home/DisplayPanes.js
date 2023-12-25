import React, { useState } from 'react';
import "../../Styles/HomeStyle/DisplayPanes.css"

const panesData = [
  {
    id: 'imagine',
    color: 'red',
    icon: 'fas fa-walking',
    title: 'Imagine',
    subtitle: 'Chase your dreams',
    image: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100',
  },
  {
    id: 'build',
    color: 'yellow',
    icon: 'fas fa-apple-alt',
    title: 'Build',
    subtitle: 'Realize your vision',
    image: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100',
  },
  {
    id: 'explore',
    color: 'green',
    icon: 'fas fa-tree',
    title: 'Explore',
    subtitle: 'Discover the world',
    image: 'https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100',
  },
  {
    id: 'adapt',
    color: 'blue',
    icon: 'fas fa-tint',
    title: 'Adapt',
    subtitle: 'Embrace the times',
    image: 'https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100',
  },
  {
    id: 'inspire',
    color: 'purple',
    icon: 'fas fa-palette',
    title: 'Inspire',
    subtitle: 'Share your potential',
    image: 'https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100',
  },
];

const DisplayPanes = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handlePaneClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // Remove active state if already active
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="antialiased bg-gradient-to-b flex flex-col font-sans from-black items-stretch justify-center h-screen p-2 to-gray-900 sm:flex-row sm:items-center">
      <div className="flex flex-col flex-grow items-stretch max-w-2xl min-w-md w-full sm:flex-row sm:h-72 sm:overflow-hidden">
        {panesData.map((pane, index) => (
          <div
            key={pane.id}
            className={`cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden pane relative rounded-3xl transition-all ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => handlePaneClick(index)}
          >
            <div
              className={`absolute background bg-center bg-cover bg-${pane.color}-500 bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10`}
              style={{ backgroundImage: `url(${pane.image})` }}
            ></div>
            <div
              className={`absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20`}
            ></div>
            <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30">
              <div
                className={`bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-${pane.color}-500 w-10`}
              >
                <i className={pane.icon}></i>
              </div>
              <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                <div
                  className={`ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8`}
                >
                  {pane.title}
                </div>
                <div
                  className={`delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8`}
                >
                  {pane.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPanes;
