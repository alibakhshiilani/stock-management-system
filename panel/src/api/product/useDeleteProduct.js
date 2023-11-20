import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteProduct = async (id) => {
    // Perform API call to delete the product
    try {
      await useFetch({
        method: 'DELETE',
        url: `/product/${id}`,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries("product");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteProduct);
};

export default useDeleteProduct;
