import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateUser = () => {
  const queryClient = useQueryClient();

  const createUser = async (data) => {
    // Perform API call to create a new stock
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/user',
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('user');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createUser);
};

export default useCreateUser;
