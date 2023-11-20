import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetProduct = (searchTerm) => {
  return useQuery(['product', searchTerm], () => useFetch({
    url:"/product",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetProduct
