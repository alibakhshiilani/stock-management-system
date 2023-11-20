import useDeleteUser from '@api/user/useDeleteUser.js';
import useGetUser from '@api/user/useGetUser.js';
import Table from '@components/table/Table.jsx';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';




const User = () => {


  const columns = [
    {
        name: 'کد سیستمی',
        selector: row => row.id,
        sortable: true,
    },
    {
      name: 'نام',
      selector: row => row.name,
      sortable: true,
  },
  {
    name: 'نوع کاربر',
    selector: row => {
      return <div className='bg-green-600 shadow-lg font-extrabold text-white p-1 rounded-lg'>{row.is_admin ? "مدیر" : "کارمند"}</div>
    },
    sortable: true,
  },
  {
  name: 'کد پرسنلی',
  selector: row => row.mobile,
  sortable: true,
  },
  {
    operation:true,
    name: 'عملیات',
    selector: row => <div className='flex w-full'>
  
  
  <button onClick={() => confirm("آیا مطمین هستید؟") ? handleDelete(row?.id) : false} className='bg-red-500 w-full font-medium text-white px-2 py-1 rounded-lg shadow-lg hover:bg-red-400'>حذف</button>
  
    </div>,            
  }
  ];

  const [page,setPage] = useState(1)

  const  deleteMutation = useDeleteUser();

  const navigate = useNavigate()


  const handleUpdate = (id) => {
    navigate(`/user/${id}`)
  }


  const handleDelete = (id) => {
    deleteMutation.mutateAsync(id)
    toast("کاربر با موفقیت حذف گردید","success")
  }


  const {data,loading} = useGetUser({page})
  // console.log("props",props)

  return     <div className="flex-grow flex flex-col">
  <div className="flex-grow">
    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="flex justify-between text-sm font-medium uppercase tracking-wide">
<p className='p-2'>لیست کاربران</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600 bg-secondary p-2 rounded text-white"
>
<Link to="/users/create" className=""
>ثبت کاربر جدید</Link>
</div>
</div>

    </div>



</div>

<div className="px-4 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">



<Table page={page} setPage={setPage} columns={columns}
            data={data} handleDelete={handleDelete} loading={loading} handleUpdate={handleUpdate}
            />


</div>

    </div>


</div>
    
    </div>
  </div>
}

export default User
