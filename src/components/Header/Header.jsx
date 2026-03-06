import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Weather<span>App</span></h1>

      <button onClick={toggleTheme} className={styles.toggleButton}>
        <div className={`${styles.toggleTrack} ${isDark ? styles.darkToggleTrack : ''}`}>
          <div className={`${styles.toggleThumb} ${isDark ? styles.darkToggleThumb : ''}`}>
            {isDark ? <FaMoon /> : <MdLightMode />}
          </div>
        </div>
      </button>
    </header>
  );
}

export default Header;