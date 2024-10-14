import styles from './SquareHeader.module.css';
import logoutIcon from '../../assets/logout.svg';
import { useAuth } from '../../context/AuthContext';

const SquareHeader = () => {
    const { logout } = useAuth();

    return (
        <header className={styles.squareHeader}>
            <h1>Dashboard</h1>
            <button type="button" onClick={logout}>
                <img src={logoutIcon} alt="Logout" />
            </button>
        </header>
    )
}

export default SquareHeader;