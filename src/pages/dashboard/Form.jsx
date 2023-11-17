// import useCreateProduct from '@api/useCreateProduct.js';
import useGetDriver from '@api/driver/useGetDriver.js'

import useGetVehicle from '@api/vehicle/useGetVehicle.js'
// import useGetStock from '@api/useGetStock.js';
import Input from '@components/input/Input.jsx'
import Select from '@components/select/Select.jsx'
import moment from 'moment-jalaali'
import { useForm, Controller } from 'react-hook-form'
import { DatePicker } from 'zaman'

const Form = ({ onSubmit, defaultValues }) => {
  const { data: driverListData } = useGetDriver()
  const { data: vehicleListData } = useGetVehicle()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues || {} })

  console.log({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Input register={register("name",{
      required:"محصول الزامی است"
    })} errors={errors} name="name" placeholder={"محصول"}/> */}

      <label htmlFor="code" className="text-sm mb-2 block font-normal text-gray-500">
        کد Article
      </label>

      <Input
        register={register('code', {
          required: 'کد Article الزامی است',
        })}
        errors={errors}
        name="code"
        placeholder={'کد Article'}
        readOnly
      />

      <label htmlFor="name" className="text-sm mb-2 block font-normal text-gray-500">
        شرح کالا
      </label>

      <Input
        register={register('name', {
          required: 'شرح کالا الزامی است',
        })}
        errors={errors}
        name="name"
        placeholder={'شرح کالا'}
        readOnly
      />

      <label htmlFor="floor" className="text-sm mb-2 block font-normal text-gray-500">
        کفچین
      </label>

      <Input
        type="number"
        register={register('floor', {
          required: 'کفچین الزامی است',
        })}
        errors={errors}
        name="floor"
        placeholder={'کفچین'}
        min={0}
      />

      <label htmlFor="line" className="text-sm mb-2 block font-normal text-gray-500">
        تعداد پالت دریافت
      </label>

      <Input
        type="number"
        register={register('line', {
          required: 'تعداد پالت دریافت الزامی است',
        })}
        errors={errors}
        name="line"
        placeholder={'تعداد پالت دریافت'}
        min={0}
      />

      {/* <label for="location" className="text-sm mb-2 block font-normal text-gray-500">لوکیشن کالا</label> */}

      {/* <div className='flex justify-between'>
    <div className='w-1/4'>
    <Input register={register("location_1",{
      required:"لوکیشن کالا الزامی است"
    })} errors={errors} name="location_1" placeholder={"1-27"}/>
    </div>
    <div className='w-1/4'>
    <Input register={register("location_2",{
      required:"لوکیشن کالا الزامی است"
    })} errors={errors} name="location_2" placeholder={"1-7"}/>
    </div>
    <div className='w-1/4'>
    <Input register={register("location_3",{
      required:"لوکیشن کالا الزامی است"
    })} errors={errors} name="location_3" placeholder={"A-Z"}/>
    </div>

</div> */}

      {/* <Input register={register("line",{
      required:" شماره line الزامی است"
    })} errors={errors} name="line" placeholder={"شماره Line "}/>

  <Input register={register("floor",{
      required:"شماره Floor الزامی است"
    })} errors={errors} name="floor" placeholder={"شماره Floor"}/> */}

      <label htmlFor="expiration_date" className="text-sm mb-2 block font-normal text-gray-500">
        تاریخ انقضا
      </label>
      <Controller
        {...register('expiration_date', {
          required: 'تاریخ انقضا الزامی است',
        })}
        control={control}
        render={({ field }) => (
          <DatePicker
            className="w-full"
            inputClass="W-[100%] mb-4 p-4 block rounded-lg font-medium outline-none border border-gray-400 focus:border-green-500 focus:text-green-500 "
            onChange={(event) => {
              field.onChange(event?.value)
            }}
            defaultValue={defaultValues?.expiration_date ? new Date(defaultValues.expiration_date) : new Date()}
            value={field.value}
            inputAttributes={{ placeholder: 'تاریخ انقضا', style: { width: '100%' } }}
          />
        )}
      />

      {errors?.['expiration_date'] && (
        <span className="text-red-600 mb-5 block">{errors?.['expiration_date']?.message}</span>
      )}

      <label htmlFor="login_date" className="text-sm mb-2 block font-normal text-gray-500">
        تاریخ ورود
      </label>
      <input
        errors={errors}
        className="mb-4 border-gray-600 flex-auto p-4 block rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500"
        name="login_date"
        value={moment().format('jYYYY/jM/jD')}
        disabled
      />

      <label htmlFor="production_date" className="text-sm mb-2 block font-normal text-gray-500">
        تاریخ تولید
      </label>
      <Controller
        {...register('production_date', {
          required: 'تاریخ تولید الزامی است',
        })}
        control={control}
        render={({ field }) => (
          <DatePicker
            className="w-full"
            inputClass="W-[100%] mb-4 p-4 block rounded-lg font-medium outline-none border border-gray-400 focus:border-green-500 focus:text-green-500 "
            onChange={(event) => {
              field.onChange(event?.value)
            }}
            defaultValue={defaultValues?.production_date ? new Date(defaultValues.production_date) : new Date()}
            value={field.value}
            inputAttributes={{ placeholder: 'تاریخ تولید', style: { width: '100%' } }}
          />
        )}
      />

      {errors?.['production_date'] && (
        <span className="text-red-600 mb-5 block">{errors?.['production_date']?.message}</span>
      )}

      {/* <label for="vehicle_id" className="text-sm mb-2 block font-normal text-gray-500">نوع وسیله نقلیه</label>
    

        <Controller
          {...register("vehicle_id",{
            required:"وسیله نقلیه الزامی است"
          })}
          control={control}
          render={({ field }) => (
            <Select
              options={vehicleListData?.rows.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              value={vehicleListData?.rows.find((c) => c.id === field.value)}
              onChange={(event) => {
                field.onChange(event?.value)
              }} // Use field.onChange to handle value changes
            />
          )}
        />
    */}

      <label htmlFor="vehicle_id" className="text-sm mb-2 block font-normal text-gray-500">
        نوع وسیله نقلیه دریافت
      </label>

      <select
        className="border-gray-500 w-full mb-3 flex-auto p-4 block rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500 "
        name="driver_id"
        {...register('vehicle_id', {
          required: 'نوع وسیله نقلیه الزامی است',
        })}>
        {vehicleListData?.rows.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {errors?.['vehicle_id'] && <span className="text-red-600 mb-5 block">{errors?.['vehicle_id']?.message}</span>}

      <label htmlFor="driver_id" className="text-sm mb-2 block font-normal text-gray-500">
        نام راننده جابجایی کالا
      </label>

      <select
        className="border-gray-500 w-full mb-3 flex-auto p-4 block rounded-lg font-medium outline-none border focus:border-green-500 focus:text-green-500 "
        name="driver_id"
        {...register('driver_id', {
          required: 'راننده الزامی است',
        })}>
        {driverListData?.rows.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {errors?.['driver_id'] && <span className="text-red-600 mb-5 block">{errors?.['driver_id']?.message}</span>}

      {/* {
      errors?.["product_id"] && <span className='text-red-600 mb-5 block'>{errors?.["product_id"]?.message}</span>
    }   

    <br />  


    {/* <label for="stock_id" className="text-sm mb-2 block font-normal text-gray-500">انبار</label>
    {
      stockListData && (
        <Controller
          {...register("stock_id",{
            required:"انبار الزامی است"
          })}
          control={control}
          render={({ field }) => (
            <Select
              options={stockListData.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              value={stockListData.find((c) => c.id === field.value)}
              onChange={(event) => {
                field.onChange(event?.value)
              }} // Use field.onChange to handle value changes
            />
          )}
        />
      )
    } */}

      {/* {
      errors?.["stock_id"] && <span className='text-red-600 mb-5 block'>{errors?.["stock_id"]?.message}</span>
    }    */}

      {/* <br /> */}

      <button
        className="bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400"
        type="submit">
        ذخیره
      </button>
    </form>
  )
}

export default Form
