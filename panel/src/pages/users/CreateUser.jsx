// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateUser from '@api/user/useCreateUser.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import Select from '@components/select/Select.jsx';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const {  register, handleSubmit, watch, formState: { errors } } = useForm();

  const createUserMutation = useCreateUser();

  let navigate = useNavigate();

  const onSubmit = async data => {
    // console.log({data})
    const createdUser = await createUserMutation.mutateAsync(data);
    navigate("/users")
  };


  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>ایجاد کاربر جدید</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/users">لیست کاربران</Link>

</div>
</div>

    </div>



</div>

<div className="px-4 md:w-96 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">


    <form onSubmit={handleSubmit(onSubmit)}>

    <Input register={register("name",{
        required:"نام و نام خانوادگی الزامی است"
      })} errors={errors} name="name" placeholder={"نام و نام خانوادگی"}/>

    <Input register={register("mobile",{
        required:"کد پرسنلی الزامی است"
      })} errors={errors} name="mobile" placeholder={"کد پرسنلی (نام کاربری)"}/>

    <Input register={register("password",{
        required:"رمز عبور الزامی است"
      })} errors={errors} name="password" placeholder={"رمز عبور"}/>

    <label for="stock_id" className="text-sm mb-2 block font-normal text-gray-500">نوع کاربر</label>
  
        <select className='border-gray-500 w-full mb-3 flex-auto p-4 block rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500 ' name="is_admin" 
          {...register("is_admin",{
            required: "نوع کاربر الزامی است"
          })}>
          <option value="0">کاربر</option>
          <option value="1">مدیر</option>
        </select>

        {
      errors?.["is_admin"] && <span className='text-red-600 mb-5 block'>{errors?.["is_admin"]?.message}</span>
    }  
{/* 
    <Input register={register("email",{
        required:"ایمیل الزامی است"
      })} errors={errors} name="email" placeholder={"ایمیل"}/>
       */}
      <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button>
    </form>


</div>

    </div>


</div>
    
    </div>
  </div>
}

export default CreateUser
