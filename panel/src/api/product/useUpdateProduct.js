import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const updateProduct = async (data) => {
    // console.log({id,data})
    // Perform API call to create a new product
    try {
      const response = await useFetch({
        method: 'PUT',
        url: `/product/${data.id}`,
        body: data,
      });

      // Invalidate the product list query to trigger a refetch
      queryClient.invalidateQueries('product');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(updateProduct);
};

export default useUpdateProduct;
