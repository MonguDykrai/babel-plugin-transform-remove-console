import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    console.log(654321);
  }, []);
  
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
