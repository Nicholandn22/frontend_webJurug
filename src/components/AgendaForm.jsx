import { useState } from "react";
import axios from "axios";

export default function AgendaForm() {
	const [authenticated, setAuthenticated] = useState(false);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const [formData, setFormData] = useState({
		judul: "",
		deskripsi: "",
		gambar: null,
	});

	// ✅ Gunakan ENV agar fleksibel
	const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		const correctPassword = "jurug123"; // (❗ nanti kita bahas cara amankan)
		if (password === correctPassword) {
			setAuthenticated(true);
			setError("");
		} else {
			setError("Sandi salah! Silakan coba lagi.");
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "gambar") {
			setFormData({ ...formData, gambar: e.target.files[0] });
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const uploadData = new FormData();
		uploadData.append("judul", formData.judul);
		uploadData.append("deskripsi", formData.deskripsi);
		uploadData.append("gambar", formData.gambar);

		try {
			await axios.post(`${API_URL}/api/agenda`, uploadData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			alert("Agenda berhasil ditambahkan!");
		} catch (err) {
			console.error(err);
			alert("Gagal menambahkan agenda.");
		}
	};

	return (
		<div className="container py-5">
			{!authenticated ? (
				<form
					onSubmit={handlePasswordSubmit}
					className="w-100"
					style={{ maxWidth: "400px" }}
				>
					<h4 className="mb-3">Masukkan Sandi untuk Tambah Agenda</h4>
					<input
						type="password"
						className="form-control mb-2"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Sandi"
					/>
					{error && <div className="text-danger mb-2">{error}</div>}
					<button type="submit" className="btn btn-primary">
						Masuk
					</button>
				</form>
			) : (
				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<h3 className="mb-4">Form Tambah Agenda</h3>
					<div className="mb-3">
						<label className="form-label">Judul</label>
						<input
							type="text"
							name="judul"
							className="form-control"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Deskripsi</label>
						<textarea
							name="deskripsi"
							className="form-control"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Gambar</label>
						<input
							type="file"
							name="gambar"
							className="form-control"
							accept="image/*"
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" className="btn btn-success">
						Simpan Agenda
					</button>
				</form>
			)}
		</div>
	);
}
