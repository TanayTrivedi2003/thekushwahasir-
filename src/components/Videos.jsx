export default function Videos() {

  const videos = [

  {
    title: "134 Hours Roadmap 2026-27",

    embed: "https://www.youtube.com/embed/TnMbJqs0m7U",

    youtube: "https://youtu.be/TnMbJqs0m7U"
  },

  {
    title: "35 Marks Calculus Strategy",

    embed: "https://www.youtube.com/embed/7JFMIMp25-8",

    youtube: "https://youtu.be/7JFMIMp25-8"
  },

  {
    title: "Increasing & Decreasing Functions",

    embed: "https://www.youtube.com/embed/6QCprqoXGcc",

    youtube: "https://youtu.be/6QCprqoXGcc"
  },

  {
    title: "NDA 1 Maths PYQ Revision",

    embed: "https://www.youtube.com/embed/qDZbr6iMqqs",

    youtube: "https://youtu.be/qDZbr6iMqqs"
  }

];

  return (

    <section
      id="media"
      className="videos-section"
    >

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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="video-info">

              <h3>
                {video.title}
              </h3>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}