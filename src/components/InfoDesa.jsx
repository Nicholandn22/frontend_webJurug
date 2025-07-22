// const InfoDesa = () => (
//   <section style={{ padding: '2rem' }}>
//     <h3>Profil Singkat</h3>
//     <p>Desa ini terletak di wilayah dataran rendah dan memiliki potensi budaya dan wisata yang tinggi...</p>
//   </section>
// );
export default function InfoDesa() {
  return (
    <section className="container py-5" id="profil">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://i.pinimg.com/736x/f2/76/55/f27655cc3b62643a06b0caa08ff6e99b.jpg"
            className="img-fluid"
            alt="Kegiatan Desa"
          />
        </div>
        <div className="col-md-6">
          <h3>Profil Desa</h3>
          <p>
            Desa Contoh adalah desa yang terletak di Kecamatan Sedayu, Kabupaten Bantul. Desa ini
            memiliki potensi wisata, budaya, dan pertanian yang berkembang pesat. Warga desa aktif
            dalam kegiatan gotong royong, pelestarian budaya, dan pemberdayaan UMKM lokal.
          </p>
        </div>
      </div>
    </section>
  );
}