import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUpdateStockItem = () => {
  const queryClient = useQueryClient();

  const updateStockItem = async (data) => {
    // Perform API call to create a new stock
    try {
      const response = await useFetch({
        method: 'PUT',
        url: `/stock_item/${data.id}`,
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('stock');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(updateStockItem);
};

export default useUpdateStockItem;
