import Todos from '../components/Todos';
import Menus from '../components/Menus'

import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.home}> 
      <Menus />
      <Todos />
    </div>
  );
}
