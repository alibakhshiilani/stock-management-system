import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetStockItem = (searchTerm) => {
  return useQuery(['stock_item', searchTerm], () => useFetch({
    url:"/stock_item",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetStockItem
