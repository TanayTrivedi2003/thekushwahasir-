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
          REELS THAT
EDUCATE
        </h2>

      </div>

      <div className="reels-slider">

        <div className="reels-track">

          {reels.map((reel, index) => (

            <a
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              className="reel-card"
              key={index}
            >

              <video
                className="reel-video"
                src={reel.video}
                autoPlay
                muted
                loop
                playsInline
              />

            </a>

          ))}

          {reels.map((reel, index) => (

            <a
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              className="reel-card"
              key={`duplicate-${index}`}
            >

              <video
                className="reel-video"
                src={reel.video}
                autoPlay
                muted
                loop
                playsInline
              />

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}