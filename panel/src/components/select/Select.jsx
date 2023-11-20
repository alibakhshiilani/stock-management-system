import React from 'react'
import { Controller } from 'react-hook-form'

function Select({ name, errors, control, options }) {
  const error = errors?.[name]

  console.log({ control })

  return (
    <>
      <div className={`border rounded-lg flex mb-4 ${error ? 'border-red-500' : 'border-gray-400'}`}>
        <Controller
          name={name}
          control={control}
          render={({ onChange, value }) => (
            <Select
              // ref={ref}
              options={options.map((item) => {
                return { label: item.name, value: item.id }
              })}
              value={options.find((c) => c.id === value)}
              onChange={(val) => onChange(val.value)}
              // defaultValue={productListData.find((c) => c.value === countryValue)}
            />
          )}
          rules={{ required: true }}
        />
        {error && (
          <div className="flex items-center pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-current text-red-500 inline-block h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>

      {error && <span className="text-red-600 mb-5 block">{error?.message}</span>}
    </>
  )
}

export default Select
