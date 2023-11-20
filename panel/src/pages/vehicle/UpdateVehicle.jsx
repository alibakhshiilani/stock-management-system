// import useCreateVehicle from '@api/useCreateVehicle.js';
import useUpdateVehicle from '@api/vehicle/useUpdateVehicle.js';
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from './Form.jsx';
import useGetVehicle from '@api/vehicle/useGetVehicle.js';

const UpdateVehicle = () => {

  const {id} = useParams();
 

  const updateVehicleMutation = useUpdateVehicle();
  const {data,loading} = useGetVehicle({id})


  let navigate = useNavigate();

  const onSubmit = async data => {
    console.log({data})
    await updateVehicleMutation.mutateAsync(data);
    navigate("/vehicles")
  };


  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>ویرایش نوع وسیله نقلیه </p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/vehicles">لیست نوع وسیله نفلیه</Link>

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

export default UpdateVehicle
