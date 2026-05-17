import { useEffect, useState } from "react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa";

export default function SocialSection() {

  /* TOTAL VIEWS */

  const [views, setViews] = useState(100000000);

  /* ULTRA FAST TOTAL VIEW COUNTER */

  useEffect(() => {

    const interval = setInterval(() => {

      setViews(prev => {

        if(prev >= 2400000000){
          return 2400000000;
        }

        return prev + Math.floor(Math.random() * 5000000);

      });

    }, 10);

    return () => clearInterval(interval);

  }, []);

  /* FORMAT TOTAL VIEWS */

  const formatViews = (num) => {

    if(num >= 1000000000){

      return (
        (num / 1000000000)
        .toFixed(1)
        + "B+"
      );
    }

    if(num >= 1000000){

      return (
        (num / 1000000)
        .toFixed(1)
        + "M+"
      );
    }

    if(num >= 1000){

      return (
        (num / 1000)
        .toFixed(1)
        + "K+"
      );
    }

    return num;
  };

  return (

    <section className="social-section" id="social">

      <div className="section-top">

        <span className="section-label">
          Social Presence
        </span>

        <h2 className="section-title">
          Dominating Every Platform
        </h2>

      </div>

      {/* SOCIAL GRID */}

      <div className="social-grid">

        {/* INSTAGRAM */}

        <div className="social-card">

          <div className="social-icon instagram">
            <FaInstagram />
          </div>

          <h3>Instagram</h3>

          <p>@thekushwahasir</p>

          <div className="social-number">
            577<small>K</small>
          </div>

          <span>Followers</span>

        </div>

        {/* YOUTUBE */}

        <div className="social-card">

          <div className="social-icon youtube">
            <FaYoutube />
          </div>

          <h3>YouTube</h3>

          <p>The Kushwaha Sir</p>

          <div className="social-number">
            92.6<small>K</small>
          </div>

          <span>Subscribers</span>

        </div>

        {/* FACEBOOK */}

        <div className="social-card">

          <div className="social-icon facebook">
            <FaFacebookF />
          </div>

          <h3>Facebook</h3>

          <p>thekushwahasir1</p>

          <div className="social-number">
            35<small>K</small>
          </div>

          <span>Followers</span>

        </div>

      </div>

      {/* BIG STATS */}

      <div className="mega-stats">

        <div className="mega-card">

          <h4 className="live-counter">
            {formatViews(views)}
          </h4>

          <span>Total Views</span>

        </div>

        <div className="mega-card">

          <h4>96%</h4>

          <span>Engagement</span>

        </div>

        <div className="mega-card">

          <h4>140+</h4>

          <span>Viral Reels</span>

        </div>

      </div>

    </section>
  );
}