// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateProduct from '@api/product/useCreateProduct.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Form = ({onSubmit,defaultValues,formAttributes={}}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({defaultValues:defaultValues || {}});

  return <form onSubmit={handleSubmit(onSubmit)} {...formAttributes}>

  <Input type='file' register={register("file",{
      required:"فایل Excel"
    })} errors={errors} name="file"/>

    <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">آپلود فایل</button>
  </form>

}

export default Form
