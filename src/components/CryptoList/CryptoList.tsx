import { CryptoItem, QueryLimit, SelectedSymbol } from '..';
import { useManageStateProvider } from '../../context';
import { useGetCryptoData } from '../../hooks';
import styles from './CryptoList.module.css';

const CryptoList = () => {
  const { symbol, limit } = useManageStateProvider();
  const { cryptoData, isLoading } = useGetCryptoData(symbol, limit);

  return (
    <div className={styles['main-container']}>
      <div className={styles['selector-wrap']}>
        <div className={styles.symbol}>
          <SelectedSymbol />
        </div>
        <div className={styles.limit}>
          <QueryLimit />
        </div>
      </div>
      <div className={styles['container']}>
        {!isLoading ? (
          cryptoData.map((itemData) => (
            <CryptoItem key={itemData.Id} {...itemData} />
          ))
        ) : (
          <p className={styles['loading-text']}>Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;
