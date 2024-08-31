import Link from 'next/link';
import styles from '../../styles/NextButton.module.scss';

export default function NextButton({ href, disabled }) {
  return (
    <Link href={`result/${href}`}>
      <button
        className={`${styles.button} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={disabled}>
        Next
      </button>
    </Link>
  );
}
