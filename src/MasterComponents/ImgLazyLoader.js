import React, { useEffect, useRef, useState } from 'react'

const ImgLazyLoader = (props) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if(!inView){
    return (
      <img ref={ref} className="w-full"></img>
    )
  }
  if(inView){
    return(
      <img src={props.img} className={props.cName} alt="image" />
    )
  }
}

export default ImgLazyLoader
