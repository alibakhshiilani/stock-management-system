import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetDriver = (searchTerm) => {
  return useQuery(['driver', searchTerm], () => useFetch({
    url:"/driver",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetDriver
