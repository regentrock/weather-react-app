// SearchBar.jsx
import styles from './SearchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar({ city, setCity, onSearch }) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar localização..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.searchButton}
          type="button"
          onClick={onSearch}
          aria-label="Buscar"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;