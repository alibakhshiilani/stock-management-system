import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUpdateDriver = () => {
  const queryClient = useQueryClient();

  const updateDriver = async (data) => {
    // console.log({id,data})
    // Perform API call to create a new driver
    try {
      const response = await useFetch({
        method: 'PUT',
        url: `/driver/${data.id}`,
        body: data,
      });

      // Invalidate the driver list query to trigger a refetch
      queryClient.invalidateQueries('driver');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(updateDriver);
};

export default useUpdateDriver;
