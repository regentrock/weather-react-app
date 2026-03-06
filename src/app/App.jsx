// App.jsx
import { useState, lazy, Suspense } from 'react';
import styles from './App.module.css';

// Lazy load components
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const SearchBar = lazy(() => import('../components/SearchBar/SearchBar'));
const WeatherInfo = lazy(() => import('../components/WeatherInfo/WeatherInfo'));

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric&lang=pt_br`
      );

      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }

      const data = await response.json();
      setWeatherData(data);

    } catch (err) {
      setError(err.message || 'Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.body}>

      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main className={styles.main}>
        <Suspense fallback={null}>
          <SearchBar
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
          />
        </Suspense>

        {loading && <p className={styles.loading}>Carregando...</p>}
        {error && <p className={styles.error}>{error}</p>}

        <Suspense fallback={null}>
          <WeatherInfo weatherData={weatherData} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </section>
  );
}

export default App;