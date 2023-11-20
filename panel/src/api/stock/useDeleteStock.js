import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteStock = () => {
  const queryClient = useQueryClient();

  const deleteStock = async (id) => {
    // Perform API call to delete the product
    try {
      await useFetch({
        method: 'DELETE',
        url: `/stock/${id}`,
      });

      console.log("Stock query invalidated");

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries("stock");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteStock);
};

export default useDeleteStock;
