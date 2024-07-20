import { useEffect, useState } from 'react';
import {
  IApiResponseData,
  IResponseData,
  ISymbol,
} from '../model/apiResData.types';
import { formatResData } from '../utils/formatResData';
import { BASEURL } from '../constant';


const useCryptoData = (sym: ISymbol, limit: string) => {
  const [apiData, setApiData] = useState<IApiResponseData>({
    cryptoData: [],
    isLoading: true,
  });
  const queryLimit = limit ? limit : 10;
  const fetchCryptoData = async () => {
    setApiData({ ...apiData, isLoading: false });
    try {
      const res = await fetch(
        `${BASEURL}/mktcapfull?limit=${Number(queryLimit)}&tsym=${sym}`
      );
      const data: IResponseData = await res.json();

      const formattedData = formatResData(data, sym);
      setApiData({ cryptoData: formattedData, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      () => setApiData({ ...apiData, isLoading: false });
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, [sym, BASEURL, limit]);

  return apiData;
};

export default useCryptoData;
