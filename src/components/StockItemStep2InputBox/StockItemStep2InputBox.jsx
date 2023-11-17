const CreateStockItemStep2InputBox = ({ register, inputValue, inputTitle, inputPlaceholder, isTextArea }) => {
  return (
    <div className="">
      <label htmlFor="createStockItemStep2Input" className="text-sm mb-2 block font-normal text-gray-500">
        {inputTitle}
      </label>
      {isTextArea ? (
        <textarea
          className="flex-auto w-full p-4 block rounded-lg font-medium outline-none border border-gray-400 focus:border-green-500 focus:text-green-500"
          type="text"
          name="articleCode"
          value={inputValue}
          placeholder="شرح کالا"
          {...register}
        />
      ) : (
        <input
          className="flex-auto p-4 block rounded-lg font-medium outline-none border border-gray-400 focus:border-green-500 focus:text-green-500"
          type="text"
          name="createStockItemStep2Input"
          value={inputValue}
          placeholder={inputPlaceholder}
          {...register}
        />
      )}
    </div>
  )
}

export default CreateStockItemStep2InputBox
