import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RentEngineResponse } from '../types';

async function getRentEngineData() {
  const response = await axios.get<RentEngineResponse[]>(
    'https://www.rentengine.io/api/getListingsInView?neLat=55.98296328587119&neLng=-54.54163846501635&swLat=5.1917120305937345&swLng=-142.45547380176595'
  );
  return response.data;
}

export function useRentEngineData() {
  const { data = [], isFetching } = useQuery({
    queryKey: ['rent-engine-data'],
    queryFn: getRentEngineData,
  });

  return { data, isFetching };
}
