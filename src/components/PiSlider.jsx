export default function PiSlider() {
  // Digits AFTER 3.14159
  const pi =
    "265358979323846264338327950288419716939937510" +
    "58209749445923078164062862089986280348253421170679" +
    "82148086513282306647093844609550582231725359408128";

  return (
    <section className="w-full overflow-hidden bg-black py-6">

      <div className="pi-container">

        {/* Static */}
        <span className="pi-static">
          π = 3.14159
        </span>

        {/* Moving */}
        <div className="pi-slider">
          <div className="pi-track">
            <span>{pi.repeat(20)}</span>
            <span>{pi.repeat(20)}</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .pi-container {
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;

          font-size: clamp(1.5rem, 4vw, 4rem);
          font-weight: 700;
          color: #77787a;
        }

        .pi-static {
          flex-shrink: 0;
          z-index: 2;
          margin-left:70px;
        }

        .pi-slider {
          overflow: hidden;
          flex: 1;
        }

        .pi-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: scroll 300s linear infinite;
        }

        .pi-track span {
          display: inline-block;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .pi-track {
            animation-duration: 1s;
          }
        }
      `}</style>
    </section>
  );
}