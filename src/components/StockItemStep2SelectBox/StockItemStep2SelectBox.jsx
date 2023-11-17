import { useState, useEffect } from 'react'

const StockItemStep2SelectBox = ({ register, name, locations, defaultValue }) => {
  const [selectBoxValue, setSelectBoxValue] = useState('')

  const selectHandlerChange = (event) => {
    // if (event.target.value < 10) event.target.value = event.target.value.padStart(3, '0')
    // else event.target.value = +event.target.value
    // event.target.value = event.target.value.padStart(3, '0').slice(-2)
  }

  return (
    <div className="flex justify-center ">
      <span className="block w-full sm:w-1/2 relative after:pointer-events-none after:content-['▼'] after:text-gray-500 after:text-sm after:absolute after:top-5 after:left-2">
        <select
          name={name}
          id={name}
          {...register(name, {
            required: 'این فیلد الزامی می باشد',
          })}
          // value={selectBoxValue < 10 ? '' + selectBoxValue : selectBoxValue}
          defaultValue={defaultValue}
          onChange={selectHandlerChange}
          className=" border-gray-500 appearance-none w-full mb-3 p-4 rounded-lg block font-medium outline-none border focus:text-green-500 focus:border-green-500 ">
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </span>
    </div>
  )
}

export default StockItemStep2SelectBox
