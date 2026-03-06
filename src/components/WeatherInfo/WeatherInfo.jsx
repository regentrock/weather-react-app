// WeatherInfo.jsx
import styles from './WeatherInfo.module.css';
import { FaWind, FaTint, FaThermometerHalf, FaCloud } from "react-icons/fa";

function WeatherInfo({ weatherData }) {
  const hasValidData = weatherData && 
                       weatherData.main && 
                       weatherData.weather && 
                       weatherData.weather.length > 0;

  if (!hasValidData) {
    return (
      <div className={styles.idleContainer}>
        <h2 className={styles.idleTitle}>Bem-vindo ao Weather App</h2>
        <p className={styles.idleMessage}>
          Digite o nome de uma cidade ou localização para ver as informações do clima
        </p>
      </div>
    );
  }

  const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });

  return (
    <>
      <div className={styles.mainInfo}>
        <h1 className={styles.temp}>
          {Math.round(weatherData.main?.temp)}°C
        </h1>

        <p className={styles.weatherInfo}>
          {weatherData.weather?.[0]?.description}
        </p>

        <p className={styles.tempLocation}>
          {weatherData.name},{" "}
          {weatherData.sys?.country ? regionNames.of(weatherData.sys.country) : weatherData.sys?.country}
        </p>
      </div>

      <div className={styles.weatherInfoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <FaWind className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Vento</h3>
          </div>
          <p className={styles.cardData}>
            {weatherData.wind?.speed} km/h
          </p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <FaTint className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Umidade</h3>
          </div>
          <p className={styles.cardData}>
            {weatherData.main?.humidity}%
          </p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <FaThermometerHalf className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Sensação</h3>
          </div>
          <p className={styles.cardData}>
            {Math.round(weatherData.main?.feels_like)}°C
          </p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <FaCloud className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Nuvens</h3>
          </div>
          <p className={styles.cardData}>
            {weatherData.clouds?.all}%
          </p>
        </div>
      </div>
    </>
  );
}

export default WeatherInfo;