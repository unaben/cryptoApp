import { IResponseData, ISymbol } from '../model/apiResData.types';
import { IFormattedApiRes } from '../model/cryptoData.types';
import DISPLAY from '../display.json';
import RAW from '../raw.json';

export const formatResData = (resData: IResponseData, sym: ISymbol) => {
  const formattedData: IFormattedApiRes[] = [];

  resData.Data.forEach((data) => {
    if (!Object.keys(data).includes('DISPLAY')) {
      return { ...data, DISPLAY };
    }
    if (!Object.keys(data).includes('RAW')) {
      return { ...data, RAW };
    }
    if (!Object.keys(data).includes('CoinInfo')) {
      return { ...data, CoinInfo: {} };
    }

    const { Id, Name, FullName, ImageUrl, Url } = data.CoinInfo;
    if (Name === 'USDT') return;
    let Price: string = '';
    let Change24hr: string = '';

    if (data.DISPLAY[sym]) {
      const { PRICE, CHANGEPCT24HOUR } = data.DISPLAY[sym];
      Price = PRICE;
      Change24hr = CHANGEPCT24HOUR;
    }

    const dataToPush = {
      Id,
      Name,
      FullName,
      ImageUrl: `https://www.cryptocompare.com${ImageUrl}`,
      Url: `https://www.cryptocompare.com${Url}`,
      Price,
      Change24hr,
    };

    formattedData.push(dataToPush);
  });
  return formattedData;
};
