// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateProduct from '@api/product/useCreateProduct.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Form from './Form.jsx';
import { toast } from 'react-toastify';
import useUploadData from '@api/data/useUploadData.js';

const ImportData = () => {

  const uploadDataMutation = useUploadData();

  const onSubmit = async data => {
    if(!data?.file?.[0]){
        toast("خطا در آپلود فایل","error")
        return;
    }

    if(!data?.file?.[0]?.name?.toLowerCase()?.includes(".xlsx")){
        toast("تنها فایل xlsx مورد فبول است","error")
        return;
    }
    console.log({data:data?.file?.[0]})
    try {
        const response = await uploadDataMutation.mutateAsync(data?.file?.[0]);
        toast("آپلود با موفقیت انجام شد")
    }catch(error){
        toast("خطا در آپلود فایل","error")
    }
  };


  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>آپلود اطلاعات</p>
    </div>

</div>

    </div>



</div>

    <div className="px-4 md:w-96 mx-auto">
  
       
    <div className="mt-0">
        <div className="px-6 py-4 bg-white shadow-md rounded-lg">


            <Form onSubmit={onSubmit} formAttributes={{enctype:"multipart/form-data"}}/>


        </div>

            </div>


        </div>
        
        </div>
  </div>
}

export default ImportData
