import {useEffect, useCallback, useState} from 'react';
import {getPortfolio} from '@services/PortfolioService';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../../interfaces/globalInterface';
import {AxiosResponse} from 'axios';
import {setPortfolio} from '@redux/portfolio/portfolioSlice';

function usePortfolio() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const assets = useSelector((state: State) => {
    console.log(state.portfolio);
    return state.portfolio.portfolio;
  });

  const getMyPortfolio = useCallback(async () => {
    setLoading(true);
    const response: AxiosResponse | undefined = await getPortfolio();
    if (response) {
      dispatch(setPortfolio(response.data));
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getMyPortfolio();
  }, [getMyPortfolio]);

  return {
    assets,
    loading,
  };
}

export default usePortfolio;
