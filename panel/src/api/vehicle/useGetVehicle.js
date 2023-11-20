import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetVehicle = (searchTerm) => {
  return useQuery(['vehicle', searchTerm], () => useFetch({
    url:"/vehicle",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetVehicle
