import useDeleteDriver from '@api/driver/useDeleteDriver.js';
import useGetDriver from '@api/driver/useGetDriver.js';
import { useState } from 'react';
import Table from '@components/table/Table.jsx';
import TablePagination from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';





const Driver = () => {

  const columns = [
  {
    name: 'نام راننده',
    selector: row => row.name,
    sortable: true,
},
  
    {
      operation:true,
      name: 'عملیات',
      selector: row => <div className='flex w-full'>
    
    
          <button onClick={() => handleUpdate(row?.id)} className='mr-2 bg-blue-500 w-full font-medium text-white px-2 py-1 rounded-lg shadow-lg hover:bg-blue-400'>ویرایش</button>
          
      </div>,            
    }
  
  ];


const [page,setPage] = useState(1)


const deleteMutation = useDeleteDriver()

const navigate = useNavigate()


const handleUpdate = (id) => {
  navigate(`/drivers/${id}`)
}
  const handleDelete = (id) => {
    deleteMutation.mutateAsync(id)
    toast("راننده با موفقیت حذف گردید","success")
  }


  const {data,loading} = useGetDriver({page})
  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       


  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='py-2'>لیست رانندگان</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/drivers/create"  
>ثبت راننده جدید</Link>
</div>
</div>

    </div>



</div>

<div className="px-4 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">




<Table page={page} setPage={setPage} columns={columns}
            data={data} loading={loading} handleUpdate={handleUpdate}
            />

</div>

    </div>


</div>
    
    </div>
  </div>
}

export default Driver
