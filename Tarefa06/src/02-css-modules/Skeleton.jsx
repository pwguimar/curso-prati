// src/02-css-modules/Skeleton.jsx
import styles from './App.module.css';

const Skeleton = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      </div>
      <div className={styles.productInfo}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonPrice}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonRating}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonTag}`}></div>
        <div className={styles.buttonGroup}>
          <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;