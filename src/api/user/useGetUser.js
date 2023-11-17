import { useQuery } from 'react-query';
import useFetch from '../useFetch.js';

const useGetUser = (searchTerm) => {
  return useQuery(['user', searchTerm], () => useFetch({
    url:"/user",
    params:searchTerm
  }), {
    retry: 3,
    refetchOnWindowFocus: true,
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useGetUser
