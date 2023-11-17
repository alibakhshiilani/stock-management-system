import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateStockItem = () => {
  const queryClient = useQueryClient();

  const createStockItem = async (data) => {
    // Perform API call to create a new stock
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/stock_item',
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('stock');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createStockItem);
};

export default useCreateStockItem;
