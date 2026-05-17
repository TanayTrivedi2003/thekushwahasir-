export default function Navbar() {
  return (
    <nav>

      <a href="/" className="nav-logo">

        <img
          src="/logo.png"
          alt="Logo"
          className="nav-logo-img"
        />

        <h1 className="logo-text">
          The Kushwaha Sir <span className="logo-dot"></span>
        </h1>

      </a>

      <ul className="nav-links">

        <li>
          <a href="#work">
            Work
          </a>
        </li>



        <li>
          <a href="#media">
            Media
          </a>
        </li>



        <li>
          <a href="#about">
            About
          </a>
        </li>





        <li>
          <a href="#brands">
            Brands
          </a>
        </li>

        

        <li>
          <a href="#inquiry" className="nav-cta">
            Work Together
          </a>
        </li>

      </ul>

    </nav>
  );
}