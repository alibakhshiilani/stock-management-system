import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteStockItem = () => {
  const queryClient = useQueryClient();

  const deleteStockItem = async (id) => {
    // Perform API call to delete the product
    try {
      await useFetch({
        method: 'DELETE',
        url: `/stock_item/${id}`,
      });

      // console.log("Stock query invalidated");

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries("stock_item");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteStockItem);
};

export default useDeleteStockItem;
