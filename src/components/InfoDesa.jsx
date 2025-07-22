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
					<h3>Profil Desa Jurug</h3>
					<p>
						Desa Jurug terletak di Kalurahan Argosari, Kecamatan Sedayu,
						Kabupaten Sleman, Yogyakarta. Desa ini menawarkan suasana pedesaan
						yang asri dengan pemandangan hijau, udara segar, serta keramahan
						masyarakatnya. Sebagai bagian dari kawasan perdesaan Yogyakarta,
						Desa Jurug kaya akan nilai budaya, tradisi gotong royong, dan
						kearifan lokal yang tetap terjaga di tengah perkembangan zaman.
						Hamparan sawah yang membentang, udara pegunungan yang sejuk, dan
						lingkungan yang bersih menjadikan Jurug sebagai destinasi yang
						menenangkan bagi siapa saja yang merindukan ketenangan dan keindahan
						alami.
					</p>
				</div>
			</div>
		</section>
	);
}
