import "../styles/loader.css";

import { useEffect, useState } from "react";

export default function Loader() {

  const [progress, setProgress] = useState(0);

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress(prev => {

        if(prev >= 100){

          clearInterval(interval);

          setTimeout(() => {

            setHide(true);

          }, 400);

          return 100;
        }

        return prev + 1;

      });

    }, 22);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className={`loader-screen ${hide ? "loader-hide" : ""}`}>

      {/* GLOW */}

      <div className="loader-glow"></div>

      {/* CONTENT */}

      <div className="loader-content">

        {/* LOGO */}

        <img
          src="/logo.png"
          alt="Logo"
          className="loader-logo"
        />

        {/* TITLE */}

        <div className="loader-title-wrap">

  {/* BACK TEXT */}

  <h1 className="loader-title loader-title-back">

    The Kushwaha Sir

    <span className="loader-dot"></span>

  </h1>

  {/* FILL TEXT */}

  <h1
    className="loader-title loader-title-fill"
    style={{
      clipPath:`inset(${100 - progress}% 0 0 0)`
    }}
  >

    The Kushwaha Sir

    <span className="loader-dot"></span>

  </h1>

</div>

        {/* LOADING */}

        <p className="loader-progress">

          loading... {progress}%

        </p>

      </div>

    </div>
  );
}