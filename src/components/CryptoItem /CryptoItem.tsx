import { IFormattedApiRes } from '../../model/cryptoData.types';
import styles from './CryptoItem.module.css';
import cn from 'classnames';

const CryptoItem: React.FC<IFormattedApiRes> = (props) => {
  const isGreaterThanZero = parseInt(props.Change24hr) > 0;
  const isLessThanZero = parseInt(props.Change24hr) < 0;
  return (
    <div className={styles['item']}>
      <img src={props.ImageUrl} className={styles['icon']} alt={props.Name} />
      <div className={styles['display-container']}>
        <div className={styles['name']}>{props.Name}</div>
        <div className={styles['fullname']}>{props.FullName}</div>
      </div>
      <div className={styles['price-container']}>
        <div className={styles['price']}>{props.Price}</div>
        <div
          className={cn(styles['price-change'], {
            [styles.success]: isGreaterThanZero,
            [styles.danger]: isLessThanZero,
          })}
        >
          {props.Change24hr && `${props.Change24hr}%`}
        </div>
      </div>
    </div>
  );
};
export default CryptoItem;
