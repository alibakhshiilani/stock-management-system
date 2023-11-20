// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateStock from '@api/stock/useCreateStock.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const CreateStock = () => {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const createStockMutation = useCreateStock();

  let navigate = useNavigate();

  const onSubmit = async data => {
    // console.log({data})
    const createdStock = await createStockMutation.mutateAsync(data);
    navigate("/stocks")
  };


  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>ایجاد انبار جدید</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/stocks/create">لیست انبار ها</Link>

</div>
</div>

    </div>



</div>

<div className="px-4 md:w-96 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">


    <form onSubmit={handleSubmit(onSubmit)}>

      <Input register={register("name",{
        required:"نام انبار الزامی است"
      })} errors={errors} name="name" placeholder={"نام انبار"}/>
      
      <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button>
    </form>


</div>

    </div>


</div>
    
    </div>
  </div>
}

export default CreateStock
