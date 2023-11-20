import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  const deleteDriver = async (id) => {
    // Perform API call to delete the driver
    try {
      await useFetch({
        method: 'DELETE',
        url: `/driver/${id}`,
      });

      // Invalidate the driver list query to trigger a refetch
      queryClient.invalidateQueries("driver");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteDriver);
};

export default useDeleteDriver;
