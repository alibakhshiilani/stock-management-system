// import useCreateProduct from '@api/useCreateProduct.js';
import useUpdateProduct from '@api/product/useUpdateProduct.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from './Form.jsx';
import useGetProduct from '@api/product/useGetProduct.js';

const UpdareProduct = () => {

  const {id} = useParams();
 

  const updateProductMutation = useUpdateProduct();
  const {data,loading} = useGetProduct({id})


  let navigate = useNavigate();

  const onSubmit = async data => {
    console.log({data})
    await updateProductMutation.mutateAsync(data);
    navigate("/products")
  };


  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>ویرایش محصول </p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/products">لیست محصولات</Link>

</div>
</div>

    </div>



</div>

<div className="px-4 md:w-96 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">


    {
      !loading && data && <Form onSubmit={onSubmit} defaultValues={data}/>
    }


</div>

    </div>


</div>
    
    </div>
  </div>
}

export default UpdareProduct
