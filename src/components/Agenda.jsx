import { useEffect, useState } from "react";
import axios from "axios";
import "./Agenda.css";
import { Link } from "react-router-dom";

export default function Agenda() {
	const [agendas, setAgendas] = useState([]);

	// Gunakan ENV agar fleksibel (fallback ke localhost saat dev)
	const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

	useEffect(() => {
		axios
			.get(`${API_URL}/api/agenda`)
			.then((res) => setAgendas(res.data))
			.catch((err) => console.error("❌ Gagal fetch agenda:", err));
	}, [API_URL]);

	// Potong kata
	function truncateWords(text, maxWords) {
		const words = text.trim().split(/\s+/);
		if (words.length <= maxWords) return text;
		return words.slice(0, maxWords).join(" ") + " ...";
	}

	return (
		<section className="bg-light py-5" id="agenda">
			<div className="container">
				<Link to="/agenda" className="text-decoration-none">
					<h3 className="mb-4 text-primary">Agenda & Kegiatan Desa</h3>
				</Link>

				<div className="row">
					{agendas.slice(0, 6).map((item, index) => (
						<div className="col-md-6 col-lg-4 mb-4" key={index}>
							<div className="card h-100 shadow-sm">
								<div className="agenda-img-wrapper">
									<img
										src={`${API_URL}/${item.gambar}`} // pakai URL backend online
										className="card-img-top agenda-img"
										alt={item.judul}
									/>
								</div>
								<div className="card-body d-flex flex-column">
									<h5 className="card-title">
										{truncateWords(item.judul, 20)}
									</h5>
									<p className="card-text agenda-desc">
										{truncateWords(item.deskripsi, 50)}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-end mt-3">
					<Link to="/agenda" className="btn btn-outline-primary btn-sm">
						Lihat Semua Agenda
					</Link>
				</div>
			</div>
		</section>
	);
}
