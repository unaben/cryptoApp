import { CryptoList } from './components/CryptoList';
import styles from './App.module.css';
import ManageStateProvider from './context/ManageStateContext';

const App = () => {
  return (
    <div className={styles.container}>
      <ManageStateProvider>
        <CryptoList />
      </ManageStateProvider>
    </div>
  );
};
export default App;
