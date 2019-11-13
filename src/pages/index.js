import { Button } from 'antd';
import { router } from 'umi';
import { getData } from '@/utils/utils';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <Button onClick={() => router.push('/products')}>Go to products</Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button type="primary">primary</Button>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
          {getData()}
        </li>
      </ul>
    </div>
  );
}
