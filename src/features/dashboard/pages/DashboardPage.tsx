import SquareHeader from '../../../shared/components/SquareHeader/SquareHeader';
import { useDashboardData, DashboardDataProvider } from '../hooks/useDashboardData';
import SquareItem from "../../../shared/components/SquareItem/SquareItem";
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
          {comments.map(({id, name, email, body }) => (
            <li key={id}>
              <SquareItem title={id} subtitle={name} email={email} body={body}  />
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