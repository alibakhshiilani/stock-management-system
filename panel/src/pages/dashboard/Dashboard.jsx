import useDeleteStockItem from '@api/stock_item/useDeleteStockItem.js';
import useGetStockItem from '@api/stock_item/useGetStockItem.js';
import Input from '@components/input/Input.jsx';
import Table from '@components/table/Table.jsx';
import moment from 'moment-jalaali';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Dashboard = () => {


  const columns = [
    {
        name: 'کد محصول',
        selector: row => <Link to={'/stock_items/create/'+row?.product?.code} className='block bg-green-600 shadow-lg font-extrabold text-white p-2 rounded-lg'>{row?.product?.code}</Link>,
        sortable: true,
    },
    {
      name: 'نام کالا',
      selector: row => row?.product?.name,
      sortable: true,
      width:"300px"
      // style:{minWidth:"300px"}
  },
  // {
  //   name: 'انبار',
  //   selector: row => row?.stock?.name,
  //   sortable: true,
  // },
  // {
  //   name: 'شرح کالا',
  //   selector: row => row.description,
  //   sortable: true,
  // },
  {
    name: 'انقضا',
    selector: row => row.expiration_date ? moment(row.expiration_date).format("jYYYY/jM/jD") : "-",
    sortable: true,
    },
    {
      name: 'ورود',
      selector: row => row.login_date ? moment(row.login_date).format("jYYYY/jM/jD") : "-",
      sortable: true,
      },
      {
        name: 'تولید',
        selector: row => row.production_date ? moment(row.production_date).format("jYYYY/jM/jD") : "-",
        sortable: true,
        },
  {
    name: 'تعداد در کارتن',
    selector: row => row?.line,
    sortable: true,
    },

    {
      name: 'تعداد کفچین',
      selector: row => row?.floor,
      sortable: true,
      },

      {
        name: 'راننده',
        selector: row => row?.driver?.name,
        sortable: true,
        },

        {
          name: 'وسیله',
          selector: row => row?.vehicle?.name,
          sortable: true,
          },
  // {
  // name: 'لوکیشن',
  // selector: row => <span style={{direction:"ltr"}}>{row.location}</span>,
  // sortable: true,
  // },
  {
    operation:true,
    name: 'عملیات',
    selector: row => <div className='flex w-full'>
  
  
        <button onClick={() => handleUpdate(row?.id)} className='mr-2 bg-blue-500 w-full font-medium text-white px-2 py-1 rounded-lg shadow-lg hover:bg-blue-400'>ویرایش</button>
        
    </div>,            
  }
  ];
  const [page,setPage] = useState(1)

  const [filter,setFilter] = useState({
    code:"",
    name:""
  })

const  deleteMutation = useDeleteStockItem();

const navigate = useNavigate()

const handleDelete = (id) => {
  deleteMutation.mutateAsync(id)
  toast("محصول موجود در انبار با موفقیت حذف گردید","success")
}

const handleUpdate = (id) => {
  navigate(`/stock_items/${id}`)
}

const handleFilters = (data) => {
  console.log({data})
  setFilter(data)
  setPage(1)
}

const { control, register, handleSubmit, watch, formState: { errors } } = useForm();

const {data,loading} = useGetStockItem({page,name:filter.name,code:filter.code})
  // console.log("props",props)

  return     <div>
  <div>
    

    
  <div className="px-4 pb-8 pt-3 mx-auto">
  
       
  <div className="mt-4">
<div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
<div className="md:flex justify-between text-sm font-medium uppercase tracking-wide">

<p className='p-2'>محصولات موجود در انبار</p>
    </div>
<div
className="ml-3 font-semibold text-sm text-gray-600  bg-secondary p-2 rounded text-white"
>
<Link to="/stock_items/create" className=""
>ثبت ورود محصول به انبار</Link> 
</div>
</div>

    </div>



</div>

<div className="px-4 mx-auto">
  
       
  <div className="mt-0">
<div className="px-6 py-4 bg-white shadow-md rounded-lg">


<form onSubmit={handleSubmit(handleFilters)} className='md:flex justify-between items-center'>

  <div className='flex gap-3'>
  <Input register={register("code")} errors={errors} placeholder={"کد Article"}/>

  <Input register={register("name")} errors={errors} placeholder={"نام کالا"}/>
  </div>

  <button className='bg-green-500 font-medium text-white px-5 py-5 rounded-lg shadow-lg hover:bg-green-400' type="submit">جستجو</button>
</form>

<div className='w-full overflow-x-scroll'>
    <Table page={page} setPage={setPage} columns={columns}
            data={data} loading={loading}
            />
</div>

</div>

    </div>


</div>
    
    </div>
  </div>
}

export default Dashboard
