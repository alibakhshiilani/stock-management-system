import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteVehicle = () => {
  const queryClient = useQueryClient();

  const deleteVehicle = async (id) => {
    // Perform API call to delete the vehicle
    try {
      await useFetch({
        method: 'DELETE',
        url: `/vehicle/${id}`,
      });

      // Invalidate the vehicle list query to trigger a refetch
      queryClient.invalidateQueries("vehicle");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteVehicle);
};

export default useDeleteVehicle;
