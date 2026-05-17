export default function PiSlider() {

  const pi =
    "14159265358979323846264338327950288419716939937510 " +
    "58209749445923078164062862089986280348253421170679 " +
    "82148086513282306647093844609550582231725359408128 ";

  return (

    <section className="pi-slider-section">

      <div className="pi-wrapper">

        <h2 className="pi-static">
          π = 3.
        </h2>

        <div className="pi-slider-window">

          <div className="pi-slider-track">

            <h2>{pi.repeat(10)}</h2>

            <h2>{pi.repeat(10)}</h2>

          </div>

        </div>

      </div>

    </section>

  );
}