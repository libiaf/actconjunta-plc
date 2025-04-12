import logoImg from "../images/logo.png";  
import configImg from "../images/configuracion.png";  

export default function Nav() {
  return (
    <nav
      className="col-lg-3 col-xl-2 text-white p-4 d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#D95961" }}
    >
      <div className="text-center mb-4">
        <img
          src={logoImg} 
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "240px", width: "100%" }}
        />
      </div>

      <a
        href="#"
        className="d-block rounded p-2 text-center text-decoration-none mb-3 fs-5"
        style={{
          backgroundColor: "#D95961",
          color: "#EFEFEF",
          fontFamily: "'InterSemiBold'",
        }}
      >
        Evaluaciones
      </a>

      <a
        href="#"
        className="d-block rounded p-2 text-center text-decoration-none fs-5"
        style={{
          backgroundColor: "#D95961",
          color: "#EFEFEF",
          fontFamily: "'InterSemiBold'",
        }}
      >
        Evaluados
      </a>

      <div
        className="mt-auto mb-5 d-flex justify-content-center"
        style={{ height: "50px", alignItems: "center" }}
      >
        <div>
          <img
            src={configImg} 
            alt="Icono Config."
            style={{
              maxWidth: "70px",
              transition: "opacity 0.3s ease-in-out",
              marginTop: "5px",
            }}
          />
        </div>
        <div className="rounded p-2 me-3">
          <a
            href="#"
            className="text-white text-decoration-none fs-5"
            style={{
              fontFamily: "'InterSemiBold'",
            }}
          >
            Configuración
          </a>
        </div>
      </div>
    </nav>
  );
}
