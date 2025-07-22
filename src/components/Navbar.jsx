// const Navbar = () => (
//   <nav style={{ padding: '1rem', background: '#004AAD', color: 'white' }}>
//     <h2>Desa Contoh</h2>
//   </nav>
// );
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Desa Contoh</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Beranda</a></li>
            <li className="nav-item"><a className="nav-link" href="#profil">Profil</a></li>
            <li className="nav-item"><a className="nav-link" href="#agenda">Agenda</a></li>
            <li className="nav-item"><a className="nav-link" href="#kontak">Kontak</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
