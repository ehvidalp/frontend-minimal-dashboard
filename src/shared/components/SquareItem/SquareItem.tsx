import { FC, useState } from 'react';
import styles from './SquareItem.module.css';
import SquareButton from '../SquareButton/SquareButton';
import eyeIcon from '../../../assets/eye.svg';

interface SquareItemProps {
  title: string | number;
  subtitle: string;
  email: string;
  body: string;
}

const SquareItem: FC<SquareItemProps> = ({ title, subtitle, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.squareItem}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div>
        <span>{email}</span>
        <button type='button' onClick={handleOpenModal}>
          <img width='15' src={eyeIcon} alt='View details' />
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{email}</p>
            <SquareButton onClick={handleCloseModal}>Close</SquareButton>
          </div>
        </div>
      )}
    </section>
  );
};

export default SquareItem;