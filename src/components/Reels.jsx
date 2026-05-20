export default function Reels() {

  const reels = [

    {
      video: "/reel1.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWx3w6IgGug/"
    },

    {
      video: "/reel2.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWvCGlsEs2u/"
    },

    {
      video: "/reel3.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWk9D6gEiiU/"
    },

    {
      video: "/reel4.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DX_FMyEB2yY/"
    },

    {
      video: "/reel5.mp4",
      link: "https://www.instagram.com/reel/DXjgpwGktzZ/"
    },

    {
      video: "/reel6.mp4",
      link: "https://www.instagram.com/reel/DXEyiGJktmM/"
    },

    {
      video: "/reel7.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW-uWr_ALGY/"
    },

    {
      video: "/reel8.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW5lClHz1wo/"
    },

    {
      video: "/reel9.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW8KCYzAMpe/"
    }

  ];

  return (

    <section className="reels-section">

      <div className="reels-top">

        <span className="section-label">
          Instagram Reels
        </span>

        <h2 className="section-title">
          REELS THAT EDUCATE
        </h2>

      </div>

      <div className="reels-marquee">

        <div className="reels-marquee-track">

          {[...reels, ...reels, ...reels].map((reel, index) => (

            <a
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              className="modern-reel-card"
              key={index}
            >

              <video
                src={reel.video}
                className="modern-reel-video"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="modern-reel-overlay">

                <span>
                  Watch Reel
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}