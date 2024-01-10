import React, { useEffect, useRef, useState } from 'react'

const VideoLazyLoader = (props) => {
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

  // if(inView){
    return(
      <video className={props.cName} autoPlay loop muted>
      <source
        src={props.video}
        type="video/mp4"
      />
    </video>
    )
  // }
  // else{
  //   return (
  //     <i ref={ref} class="fa-solid fa-spinner items-center"></i>
  //   )
  // }
}

export default VideoLazyLoader
