import './PengumumanPage.css';

import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

function PengumumanPage() {
  const [user, setUser] = useState(null);
  const [pengumuman, setPengumuman] = useState([]);
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [gambarUrl, setGambarUrl] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    fetchData();

    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, 'pengumuman'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPengumuman(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Harus login untuk menambahkan.");

    // 🔄 Konversi link Google Drive jika perlu
    let finalGambar = gambarUrl;
    const googleDrivePattern = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\//;

    const match = gambarUrl.match(googleDrivePattern);
    if (match && match[1]) {
      const fileId = match[1];
      finalGambar = `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    if (editId) {
      await updateDoc(doc(db, 'pengumuman', editId), {
        judul,
        isi,
        gambar: finalGambar,
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, 'pengumuman'), {
        judul,
        isi,
        gambar: finalGambar,
        tanggal: new Date(),
      });
    }

    setJudul('');
    setIsi('');
    setGambarUrl('');
    fetchData();
  };

  const handleEdit = (item) => {
    setJudul(item.judul);
    setIsi(item.isi);
    setGambarUrl(item.gambar || '');
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (!user) return alert("Harus login untuk menghapus.");
    await deleteDoc(doc(db, 'pengumuman', id));
    fetchData();
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="pengumuman-container">
      <h2>Daftar Pengumuman</h2>

      {user ? (
        <>
          <p>Login sebagai: {user.email}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>

          <form className="pengumuman-form" onSubmit={handleSubmit}>
            <input
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Judul"
              required
            />
            <textarea
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              placeholder="Isi pengumuman"
              required
            />
            <input
              type="url"
              value={gambarUrl}
              onChange={(e) => setGambarUrl(e.target.value)}
              placeholder="Link gambar (opsional, bisa Google Drive)"
            />
            <button type="submit">{editId ? 'Update' : 'Tambah'}</button>
          </form>
        </>
      ) : (
        <p className="login-note"><a href="/login">Login</a> untuk menambah/edit pengumuman.</p>
      )}

      <ul className="pengumuman-list">
        {pengumuman.map((item) => (
          <li className="pengumuman-item" key={item.id}>
            <h4>{item.judul}</h4>
            <p>{item.isi}</p>
            {item.gambar && (
              <img
                src={item.gambar}
                alt="Gambar pengumuman"
                style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }}
              />
            )}

            {user && (
              <>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PengumumanPage;
