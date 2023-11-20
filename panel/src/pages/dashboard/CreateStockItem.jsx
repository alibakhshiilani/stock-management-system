// import useCreateProduct from '@api/useCreateProduct.js';
import { useEffect } from 'react'
import useCreateStockItem from '@api/stock_item/useCreateStockItem.js'
import useGetProduct from '@api/product/useGetProduct.js'
import useGetStock from '@api/stock/useGetStock.js'
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { DatePicker } from 'zaman'
import Form from './Form'
import useGetStockItem from '@api/stock_item/useGetStockItem.js'

const CreateStockItem = () => {
  const createStockItemMutation = useCreateStockItem()

  const { id } = useParams()

  const { data, loading } = useGetStockItem({ code: id })

  let navigate = useNavigate()

  // از اینجا فردا دیباگ را شروع می کنم

  console.log('loading=> ', data?.rows?.[0]?.production_date)

  const onSubmit = async (data) => {
    const createdStockItem = await createStockItemMutation.mutateAsync(data)
    navigate('/stock_items/update')
    localStorage.removeItem('stock_items_create')
    localStorage.setItem('stock_items_create', JSON.stringify(data))
  }

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow">
        <div className="px-4 pb-8 pt-3 mx-auto">
          <div className="mt-4">
            <div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
              <div className="flex justify-between text-sm font-medium uppercase tracking-wide">
                <p className="p-2">لیست محصولات داخل انبار</p>
              </div>
              <div className="ml-3 font-semibold text-sm text-gray-600  bg-secondary p-2 rounded text-white">
                <Link to="/">لیست محصولات داخل انبار</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:w-96 mx-auto">
          <div className="mt-0">
            <div className="px-6 py-4 bg-white shadow-md rounded-lg">
              {console.log('name', !loading && id && data?.rows?.[0]?.product.name)}

              {!loading && id && data?.rows?.[0]?.product.name && (
                <Form
                  onSubmit={onSubmit}
                  defaultValues={{
                    code: id,
                    expiration_date: data?.rows?.[0]?.expiration_date,
                    production_date: data?.rows?.[0]?.production_date,
                    name: data?.rows?.[0]?.product.name,
                    driver_id: 1,
                    vehicle_id: 1,
                  }}
                />
              )}

              {data?.rows?.[0]?.product.name ? '' : <h1 className="text-center">در حال لود شدن دیتا :))</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStockItem
