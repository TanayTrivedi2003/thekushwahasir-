export default function Videos() {

  const videos = [

    {
      title: "The Equation That Broke The Internet",
      views: "24M Views",

      embed: "https://www.youtube.com/embed/TnMbJqs0m7U",

      youtube: "https://youtu.be/TnMbJqs0m7U"
    },

    {
      title: "Why π Never Ends",
      views: "18M Views",

      embed: "https://www.youtube.com/embed/7JFMIMp25-8",

      youtube: "https://youtu.be/7JFMIMp25-8"
    },

    {
      title: "Can You Solve This?",
      views: "12M Views",

      embed: "https://www.youtube.com/embed/6QCprqoXGcc",

      youtube: "https://youtu.be/6QCprqoXGcc"
    },

    {
      title: "Mathematics Goes Viral",
      views: "9M Views",

      embed: "https://www.youtube.com/embed/qDZbr6iMqqs",

      youtube: "https://youtu.be/qDZbr6iMqqs"
    }

  ];

  return (

    <section id="media" className="videos-section">

      <div className="videos-top">

        <span className="section-label">
          Viral Content
        </span>

        <h2 className="section-title">
          VIRAL MATHS CONTENT
        </h2>

      </div>

      <div className="videos-grid">

        {videos.map((video, index) => (

          <a
            href={video.youtube}
            target="_blank"
            rel="noreferrer"
            className="video-card"
            key={index}
          >

            <iframe
              src={video.embed}
              title={video.title}
              className="youtube-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="video-info">

              <h3>{video.title}</h3>

              <p>{video.views}</p>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}