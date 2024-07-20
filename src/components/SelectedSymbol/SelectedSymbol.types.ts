import { ISymbol } from "../../model/apiResData.types";


export interface ISelectedSymbolProps {
  setSymbol: React.Dispatch<React.SetStateAction<ISymbol>>;
}
