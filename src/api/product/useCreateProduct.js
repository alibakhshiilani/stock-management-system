import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const createProduct = async (data) => {
    // Perform API call to create a new product
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/product',
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('product');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createProduct);
};

export default useCreateProduct;
