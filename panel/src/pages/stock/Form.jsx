// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateProduct from '@api/product/useCreateProduct.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Form = ({onSubmit,defaultValues}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({defaultValues:defaultValues || {}});

  // console.log("props",props)

  return <form onSubmit={handleSubmit(onSubmit)} ini>

  <Input register={register("name",{
      required:"نام محصول الزامی است"
    })} errors={errors} name="name" placeholder={"نام محصول"}/>

  <Input register={register("code",{
      required:"کد محصول الزامی است"
    })} errors={errors} name="code" placeholder={"کد محصول"}/>
{/* 
  <Input register={register("image",{
      required:"تصویر محصول الزامی است"
    })} errors={errors} type="file" name="image" placeholder={"تصویر محصول"}/>
     */}
    <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button>
  </form>
    


}

export default Form
