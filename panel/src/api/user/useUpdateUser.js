import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const updateUser = async (data) => {
    // Perform API call to create a new stock
    try {
      const response = await useFetch({
        method: 'PUT',
        url: `/user/${data.id}`,
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('user');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(updateUser);
};

export default useUpdateUser;
