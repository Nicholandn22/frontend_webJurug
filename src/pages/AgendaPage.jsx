import { useEffect, useState } from "react";
import axios from "axios";

export default function AgendaPage() {
	const [agendas, setAgendas] = useState([]);

	// ✅ Gunakan ENV agar fleksibel
	const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

	useEffect(() => {
		axios
			.get(`${API_URL}/api/agenda`)
			.then((res) => setAgendas(res.data))
			.catch((err) => console.error("❌ Gagal fetch agenda:", err));
	}, [API_URL]);

	return (
		<div className="container py-5">
			<h2 className="mb-4">Semua Agenda & Kegiatan Desa</h2>
			<div className="row">
				{agendas.map((item, index) => (
					<div className="col-md-6 col-lg-4 mb-4" key={index}>
						<div className="card h-100 shadow-sm">
							<div style={{ height: "200px", overflow: "hidden" }}>
								<img
									src={`${API_URL}/${item.gambar}`} // ✅ Gambar dari backend online
									className="card-img-top"
									alt={item.judul}
									style={{ objectFit: "cover", height: "100%" }}
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">{item.judul}</h5>
								<p className="card-text">{truncateWords(item.deskripsi, 50)}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function truncateWords(text, maxWords) {
	const words = text.trim().split(/\s+/);
	if (words.length <= maxWords) return text;
	return words.slice(0, maxWords).join(" ") + " ...";
}
