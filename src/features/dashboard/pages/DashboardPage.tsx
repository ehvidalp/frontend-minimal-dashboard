import SquareHeader from "../../../shared/components/SquareHeader";
import { useDashboardData, DashboardDataProvider } from '../hooks/useDashboardData';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const { comments, error, loading } = useDashboardData();

  return (
    <>
      <SquareHeader />
      <section className={styles.dashboardContainer}>
        {loading && <p>Loading data ...</p>}
        {error && <p>{error}</p>}
        <ul className={styles.dashboardGrid}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h1>{comment.id}</h1>
              <h3>{comment.name}</h3>
              <small>{comment.email}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const DashboardPageWithProvider = () => (
  <DashboardDataProvider>
    <DashboardPage />
  </DashboardDataProvider>
);

export default DashboardPageWithProvider;