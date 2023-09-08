import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const deleteUser = async (id) => {
    try {
      await useFetch({
        method: 'DELETE',
        url: `/user/${id}`,
      });
      queryClient.invalidateQueries("user");
    } catch (error) {
      console.error(error)
    }
  };

  return useMutation(deleteUser);
};

export default useDeleteUser;
