// import useCreateProduct from '@api/useCreateProduct.js';
import useCreateStockItem from '@api/stock_item/useCreateStockItem.js'
import useGetProduct from '@api/product/useGetProduct.js'
import useGetStock from '@api/stock/useGetStock.js'
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { DatePicker } from 'zaman'
import Form from './Form'

const CreateStockItemStep1 = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  console.log({ errors })

  const createStockItemMutation = useCreateStockItem()

  let navigate = useNavigate()

  const onSubmit = async (data) => {
    navigate('/stock_items/create/' + data.code)
  }

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow">
        <div className="px-4 pb-8 pt-3 mx-auto">
          <div className="mt-4">
            <div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
              <div className="flex justify-between text-sm font-medium uppercase tracking-wide">
                <p className="p-2">ثبت ورود محصول جدید در انبار</p>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="code" className="text-sm mb-2 block font-normal text-gray-500">
                  کد Article
                </label>

                <Input
                  register={register('code', {
                    required: 'کد Article  باید 7 رقم باشد',
                    minLength: 7,
                    maxLength: 7,
                  })}
                  errors={errors}
                  name="code"
                  placeholder={'کد Article'}
                />

                <button
                  className="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400"
                  type="submit">
                  مرحله بعد
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStockItemStep1
