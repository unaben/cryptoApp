import { useEffect, useState } from 'react';

const useDebounce = (inputValue: string, delay: number = 1000) => {
  const [debounceValue, setDebounceValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(inputValue), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
};
export default useDebounce;
