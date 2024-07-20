import { useEffect, useState } from 'react';
import { useManageStateProvider } from '../../context';
import { useDebounce } from '../../hooks';
import styles from './QueryLimit.module.css';

const QueryLimit = () => {
  const { setLimit } = useManageStateProvider();
  const [inputValue, setInputValue] = useState<string>('');
  const debounceValue = useDebounce(inputValue);

  const handleInputSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setLimit(debounceValue);
  }, [debounceValue]);

  return (
    <form>
      <input
        className={styles.input}
        placeholder="Enter query limit.."
        value={inputValue}
        onChange={handleInputSubmit}
      />
    </form>
  );
};
export default QueryLimit;
