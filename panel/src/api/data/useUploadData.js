import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../useFetch.js';

const useUploadData = () => {
    const queryClient = useQueryClient();

    const uploadData = async (file) => {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await useFetch({
          method: 'POST',
          url: '/data/import',
          formData,
        });
  
        queryClient.invalidateQueries('data');
        return response;
      } catch (error) {
        throw new Error(error);
      }
    };
  
    return useMutation(uploadData);
};  

export default useUploadData;
