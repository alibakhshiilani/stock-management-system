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

<label for="name" className="text-sm mb-2 block font-normal text-gray-500">نام محصول</label>
  <Input register={register("name",{
      required:"نام محصول الزامی است"
    })} errors={errors} name="name" placeholder={"نام محصول"}/>

<label for="code" className="text-sm mb-2 block font-normal text-gray-500">کد Article</label>

<Input register={register("code",{
      required:"کد محصول الزامی است"
    })} errors={errors} name="code" placeholder={"کد محصول"}/>

<label for="box_count" className="text-sm mb-2 block font-normal text-gray-500">تعداد در باکس</label>

<Input register={register("box_count",{
      required:"تعداد باکس الزامی است"
    })} errors={errors} name="box_count" placeholder={"تعداد باکس"}/>

<label for="bottom_box_count" className="text-sm mb-2 block font-normal text-gray-500">تعداد کفچین</label>

<Input register={register("bottom_box_count",{
      required:"تعداد کفچین الزامی است"
    })} errors={errors} name="bottom_box_count" placeholder={"تعداد کفچین"}/>
{/* 
  <Input register={register("image",{
      required:"تصویر محصول الزامی است"
    })} errors={errors} type="file" name="image" placeholder={"تصویر محصول"}/>
     */}
    <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button>
  </form>
    


}

export default Form
