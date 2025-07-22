// const HeroSection = () => (
//   <div style={{ height: '300px', backgroundImage: `url('/img/header.jpg')`, backgroundSize: 'cover' }}>
//     <h1 style={{ color: 'white', padding: '100px 20px' }}>Selamat Datang di Desa Contoh</h1>
//   </div>
// );
export default function HeroSection() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white fw-bold"
      style={{
        height: "400px",
        backgroundImage: "url('https://i.pinimg.com/736x/21/2a/37/212a37ff368d0aa8024e0b432f462287.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textShadow: "2px 2px 4px #000"
      }}
    >
      
    </div>
  );
}