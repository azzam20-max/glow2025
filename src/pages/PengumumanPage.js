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
  const [link, setLink] = useState('');
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true); // 🔄 Tambahkan loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    fetchData();
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    setLoading(true); // 🔄 Mulai loading
    const snapshot = await getDocs(collection(db, 'pengumuman'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPengumuman(data);
    setLoading(false); // ✅ Selesai loading
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Harus login untuk menambahkan.");

    if (editId) {
      await updateDoc(doc(db, 'pengumuman', editId), {
        judul,
        isi,
        link
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, 'pengumuman'), {
        judul,
        isi,
        link,
        tanggal: new Date(),
      });
    }

    setJudul('');
    setIsi('');
    setLink('');
    fetchData();
  };

  const handleEdit = (item) => {
    setJudul(item.judul);
    setIsi(item.isi);
    setLink(item.link || '');
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

  // 🔄 Tampilkan spinner saat loading
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="pengumuman-container">
      <h2>Announcement</h2>

      {user && (
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
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Tautan (opsional)"
            />
            <button type="submit">{editId ? 'Update' : 'Tambah'}</button>
          </form>
        </>
      )}

      <ul className="pengumuman-list">
        {pengumuman.map((item) => (
          <li className="pengumuman-item" key={item.id}>
            <h4>{item.judul}</h4>
            <p>{item.isi}</p>
            {item.link && (
              <p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="pengumuman-link">
                  🔗 Lihat Tautan
                </a>
              </p>
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
