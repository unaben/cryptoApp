import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { ISymbol } from '../model/apiResData.types';
import { IManageStateContext } from './ManageStateContext.types';

const ManageStateContext = createContext<IManageStateContext | undefined>(
  undefined
);

const ManageStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [symbol, setSymbol] = useState<ISymbol>('BTC');
  const [limit, setLimit] = useState<string>('');
  return (
    <ManageStateContext.Provider value={{ symbol, setLimit, setSymbol, limit }}>
      {children}
    </ManageStateContext.Provider>
  );
};
export default ManageStateProvider;

export const useManageStateProvider = () => {
  const data = useContext(ManageStateContext);

  if (data === undefined) {
    throw new Error('Component must be wrapped in <ManageStateContext />');
  }
  return data;
};
