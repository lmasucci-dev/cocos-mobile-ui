import {useEffect, useCallback, useState} from 'react';
import {getAllInstruments} from '../../../../services/InstrumentsService';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../../interfaces/globalInterface';
import {setInstruments} from '../../../../redux/instruments/instrumentsSlice';
import {AxiosResponse} from 'axios';

function useInstruments() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const instruments = useSelector(
    (state: State) => state.instruments.instruments,
  );

  const getInstruments = useCallback(async () => {
    setLoading(true);
    const response: AxiosResponse | undefined = await getAllInstruments();
    if (response) {
      dispatch(setInstruments(response.data));
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getInstruments();
  }, [getInstruments]);

  return {
    instruments,
    loading,
  };
}

export default useInstruments;
