import {useEffect, useCallback, useState} from 'react';
import {AxiosResponse} from 'axios';
import {getAllInstruments} from '@services/InstrumentsService';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@interfaces/globalInterface';
import {setInstruments} from '../../../../redux/instruments/instrumentsSlice';

function useInstruments() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {instruments} = useSelector((state: State) => state.instruments);

  const getInstruments = useCallback(
    async (query: string = '') => {
      setLoading(true);
      try {
        const response: AxiosResponse | undefined = await getAllInstruments(
          query.toUpperCase(),
        );
        if (response) {
          console.log(response);
          dispatch(setInstruments(response.data));
        }
      } catch (error) {
        console.error('Error fetching instruments:', error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      getInstruments(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [getInstruments, searchQuery]);

  return {
    instruments,
    loading,
    searchQuery,
    setSearchQuery,
  };
}

export default useInstruments;
