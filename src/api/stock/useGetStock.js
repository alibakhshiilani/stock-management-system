import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetStock = (searchTerm) => {
  return useQuery(['stock',searchTerm], () => useFetch({
    url:"/stock",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetStock
