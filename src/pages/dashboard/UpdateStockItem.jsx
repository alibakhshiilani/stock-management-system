// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateStockItem from '@api/stock_item/useCreateStockItem.js';
import useGetProduct from '@api/product/useGetProduct.js';
import useGetStock from '@api/stock/useGetStock.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Select from "react-select";
import { DatePicker } from 'zaman';
import Form from './Form';
import useGetStockItem from '@api/stock_item/useGetStockItem.js';
import useUpdateStockItem from '@api/stock_item/useUpdateStockItem.js';
import moment from 'moment-jalaali';

const UpdateStockItem = () => {

  const { control , register, handleSubmit, watch, formState: { errors } } = useForm();

  console.log({errors})

  const {id} = useParams();

  const {data,loading} = useGetStockItem({id})


  const updateStockItemMutation = useUpdateStockItem();


  let navigate = useNavigate();

  const onSubmit = async data => {
    data.id = id;
    const updateStockItem = await updateStockItemMutation.mutateAsync(data);
    navigate("/")
  };

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>لیست محصولات داخل انبار</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600  bg-secondary p-2 rounded text-white"
>
<Link to="/">لیست محصولات داخل انبار</Link>

</div>
</div>

    </div>



</div>

<div className="px-4 md:w-96 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">
{
  console.log({location})
}

{data && <Form onSubmit={onSubmit} defaultValues={{
  code:data.product.code,
  expiration_date:(data.expiration_date),
  production_date:(data.production_date),
  // location_3:data.location?.[data.location?.length - 1],
  // location_2:data.location?.[data.location?.length - 2],
  // location_1:(data.location?.[data.location?.length - 3] || "") + (location?.[location?.length - 4] || "")
}}/>}


</div>

    </div>


</div>
    
    </div>
  </div>
}

export default UpdateStockItem
