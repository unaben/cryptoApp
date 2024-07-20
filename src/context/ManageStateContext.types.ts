import { ISymbol } from '../model/apiResData.types';

export interface IManageStateContext {
  symbol: ISymbol;
  limit: string;
  setLimit: React.Dispatch<React.SetStateAction<string>>;
  setSymbol: React.Dispatch<React.SetStateAction<ISymbol>>;
}
