import { useState, useRef, useCallback, useEffect } from 'react';
import SquareHeader from '../../../shared/components/SquareHeader/SquareHeader';
import { useDashboardData, DashboardDataProvider } from '../hooks/useDashboardData';
import SquareItem from "../../../shared/components/SquareItem/SquareItem";
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const { comments, error, loading } = useDashboardData();
  const [visibleCount, setVisibleCount] = useState(20);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setVisibleCount((prevCount) => prevCount + 20);
    }
  }, []);

  const lastElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(handleObserver);
      if (node) observer.current.observe(node);
    },
    [loading, handleObserver]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <>
      <SquareHeader />
      <section className={styles.dashboardContainer}>
        {loading && <p>Loading data ...</p>}
        {error && <p>{error}</p>}
        <ul className={styles.dashboardGrid}>
          {comments.slice(0, visibleCount).map(({ id, name, email, body }, index) => (
            <li key={id} ref={index === visibleCount - 1 ? lastElementRef : null}>
              <SquareItem title={id} subtitle={name} email={email} body={body} />
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