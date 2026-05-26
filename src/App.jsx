import { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePage from './components/CreatePage';
import storage from './services/localStorage';

const initialData = {
  name: '',
  slogan: '',
  repo: '',
  demo: '',
  technologies: '',
  desc: '',
  autor: '',
  job: '',
  image: '',
  photo: '',
};

function App() {
  const [data, setData] = useState(initialData);
  const [projects, setProjects] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setProjects(storage.get());
  }, []);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSave = () => {
    storage.save(data);
    setProjects(storage.get());
    setData(initialData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  };

  return (
    <div className="container">
      <Header />
      {showSuccess && (
        <p className="success-message">¡Proyecto guardado con éxito!</p>
      )}
      <CreatePage
        data={data}
        handleChange={handleChange}
        updateData={updateData}
        handleSave={handleSave}
      />
      <Footer />
    </div>
  );
}

export default App;
