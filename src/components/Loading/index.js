import styles from '@/styles/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <p className={styles.loading__text}>Loading...</p>
    </div>
  );
}
