import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateDriver = () => {
  const queryClient = useQueryClient();

  const createDriver = async (data) => {
    // Perform API call to create a new driver
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/driver',
        body: data,
      });

      // Invalidate the driver list query to trigger a refetch
      queryClient.invalidateQueries('driver');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createDriver);
};

export default useCreateDriver;
