export default function Brands() {

  const brands = [

    "YouTube",
    "Instagram",
    "linkedin",
    "facebook",
    "JEE Mains",
    "JEE Advanced",
     "CBSE",
    "UP Board",
    "9th",
    "10th",
    "11th",
    "12th",
    "Acadmics",
  
    "Maths"

  ];

  return (

    <section id="brands" className="brands-section">

      <div className="brands-top">

        <span className="section-label">
          Collaborations
        </span>

        <h2 className="section-title">
          TRUSTED BY
          MILLIONS
        </h2>

      </div>

      <div className="brands-marquee">

        <div className="brands-track">

          {brands.map((brand, index) => (

            <div className="brand-card" key={index}>
              {brand}
            </div>

          ))}

          {brands.map((brand, index) => (

            <div className="brand-card" key={`duplicate-${index}`}>
              {brand}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}