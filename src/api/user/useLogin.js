import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useLogin = () => {
  const queryClient = useQueryClient();

  const login = async (data) => {
    try {
      return await useFetch({
        method: 'POST',
        url: `/auth/login`,
        body:data
      });
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(login);
};

export default useLogin;
