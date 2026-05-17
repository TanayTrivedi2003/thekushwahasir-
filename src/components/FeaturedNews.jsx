export default function FeaturedNews() {

  const newsLinks = [

    {
      name: "Dailyhunt",
      logo: "/dailyhunt.png",
      link: "https://dhunt.in/14lw4L"
    },

    {
      name: "ESHN News",
      logo: "/eshn.png",
      link: "https://eshnnews.com/2026/05/12/rising-digital-creator-thekushwahasir-inspires-a-new-generation-through-engaging-social-media-content/"
    },

    {
      name: "Prime News of India",
      logo: "/primenews.png",
      link: "https://primenewsofindia.com/2026/05/12/rising-digital-creator-thekushwahasir-inspires-a-new-generation-through-engaging-social-media-content/"
    },

    {
      name: "Daily District News",
      logo: "/districtnews.png",
      link: "https://www.dailydistrictnews.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "News Wire of India",
      logo: "/newswire.png",
      link: "https://www.newswireofindia.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "99 News",
      logo: "/ninetynine.png",
      link: "https://www.99news.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "Insider News Times",
      logo: "/insider.png",
      link: "https://www.insidernewstimes.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "News Today 24x7",
      logo: "/newstoday.png",
      link: "https://www.newstoday24x7.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "The India Forbes News",
      logo: "/forbesnews.png",
      link: "https://www.theindiaforbesnews.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "Today News Standard",
      logo: "/todaystandard.png",
      link: "https://www.todaynewsstandard.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "Times News Express",
      logo: "/timesexpress.png",
      link: "https://www.timesnewsexpress.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    },

    {
      name: "The Republic News",
      logo: "/republicnews.png",
      link: "https://www.therepublicnews.co.in/2026/05/rising-digital-creator-thekushwahasir.html"
    }

  ];

  return (

    <section className="featured-news-section">

      <div className="featured-news-top">

        <span className="section-label">
          Media Coverage
        </span>

        <h2 className="section-title">
          FEATURED IN
        </h2>

      </div>

      <div className="news-slider">

        <div className="news-track">

          {[...newsLinks, ...newsLinks].map((item, index) => (

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="news-logo-card"
              key={index}
            >

              <img
                src={item.logo}
                alt={item.name}
                className="news-logo"
              />

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}