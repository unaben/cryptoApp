import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { symbols } from '../../data';
import { useManageStateProvider } from '../../context/ManageStateContext';
import styles from './SelectedSymbol.module.css';


const SelectedSymbol = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { setSymbol } = useManageStateProvider();

  return (
    <div className={styles.container}>
      <div className={styles['select-menu']} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles['select-btn']}>
          <span>Select your option</span>
          <i className="bx bx-chevron-down">
            <BiChevronDown />
          </i>
        </div>
        {isOpen && (
          <ul className={styles['options']}>
            {symbols.map((data) => {
              return (
                <li
                  key={data.name}
                  className={styles.option}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setSymbol(data.name);
                  }}
                >
                  <span className={styles['option-text']}>{data.name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default SelectedSymbol;
