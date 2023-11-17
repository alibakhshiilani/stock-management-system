import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUpdateVehicle = () => {
  const queryClient = useQueryClient();

  const updateVehicle = async (data) => {
    // console.log({id,data})
    // Perform API call to create a new vehicle
    try {
      const response = await useFetch({
        method: 'PUT',
        url: `/vehicle/${data.id}`,
        body: data,
      });

      // Invalidate the vehicle list query to trigger a refetch
      queryClient.invalidateQueries('vehicle');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(updateVehicle);
};

export default useUpdateVehicle;
