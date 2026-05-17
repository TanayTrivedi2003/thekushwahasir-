import { useEffect, useState } from "react";

export default function Loader() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setHide(true);
    }, 2600);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className={`loader-screen ${hide ? "loader-hide" : ""}`}>

      <div className="loader-content">

        <img
          src="/logo.png"
          alt="Logo"
          className="loader-logo"
        />

        <h1 className="loader-title">
          The Kushwaha Sir
        </h1>

      </div>

    </div>
  );
}