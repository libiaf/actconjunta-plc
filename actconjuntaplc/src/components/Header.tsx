import perfilImg from "../images/admin.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-3">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h1 className="fs-2 mb-3 mb-md-0 ms-md-4">Evaluados</h1>
        <div className="d-flex align-items-center text-center">
          <img
            src={perfilImg}
            alt="Foto de Perfil"
            className="img-fluid me-2"
            style={{ maxWidth: "90px" }}
          />
          <div>
            <h2 className="fs-5 mb-0">Bienvenido, Emilio Castro</h2>
            <h3 className="fs-6 mt-0">Administrador</h3>
          </div>
        </div>
      </div>
    </header>
  );
}



