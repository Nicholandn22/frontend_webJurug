import { useEffect, useState } from 'react';
import axios from 'axios';

const BeritaList = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    // sementara dummy data
    setBerita([
      { id: 1, judul: 'Kegiatan Posyandu', tanggal: '24 Juni 2025' },
      { id: 2, judul: 'Lomba 17 Agustus', tanggal: '17 Agustus 2025' },
    ]);
  }, []);

  return (
    <section style={{ padding: '2rem', background: '#f1f1f1' }}>
      <h3>Agenda / Kegiatan</h3>
      <ul>
        {berita.map(item => (
          <li key={item.id}>
            <strong>{item.judul}</strong> - <em>{item.tanggal}</em>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default BeritaList;
