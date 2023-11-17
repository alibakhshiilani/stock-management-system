import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useCreateVehicle = () => {
  const queryClient = useQueryClient();

  const createVehicle = async (data) => {
    // Perform API call to create a new vehicle
    try {
      const response = await useFetch({
        method: 'POST',
        url: '/vehicle',
        body: data,
      });

      // Invalidate the vehicle list query to trigger a refetch
      queryClient.invalidateQueries('vehicle');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  return useMutation(createVehicle);
};

export default useCreateVehicle;
