import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateStock = () => {
  const queryClient = useQueryClient();

  const createStock = async (data) => {
    // Perform API call to create a new stock
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/stock',
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('stock');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createStock);
};

export default useCreateStock;
