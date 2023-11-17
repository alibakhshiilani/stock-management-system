import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@components/input/Input.jsx'
import CreateStockItemStep2InputBox from '@components/StockItemStep2InputBox/StockItemStep2InputBox.jsx'
import { location1, location2, location3 } from '@api/data/locationData.js'
import StockItemStep2SelectBox from '@components/StockItemStep2SelectBox/StockItemStep2SelectBox.jsx'
import useCreateStockItem from '@api/stock_item/useCreateStockItem.js'

const CreateStockItemStep2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValue: {} })

  const [allPallets, setAllPallets] = useState([])
  const [mainPallet, setMainPallet] = useState({})
  const [mainPalletID, setMainPalletID] = useState(0)

  useEffect(() => {
    let infoPallet = JSON.parse(localStorage.getItem('stock_items_create')) || []
    infoPallet.isOpen = false
    const pallets = []

    for (let i = 0; i < infoPallet.line; i++) {
      pallets.push({ ...infoPallet, id: i + 1 })
    }
    setAllPallets(pallets)
    setMainPallet(infoPallet)
  }, [])

  const openAccordionPallet = (palletIndex) => {
    const showPalletFiltered = allPallets.map((pallet, index) => {
      if (index === palletIndex) {
        console.log('pallet.id === +palletId=> ', pallet.id === +palletIndex)
        return { ...pallet, isOpen: !pallet.isOpen }
      } else {
        return { ...pallet, isOpen: false }
      }
    })
    setAllPallets(showPalletFiltered)
  }

  const onSubmit = async (data) => {
    console.log('pallet saved :))', data)
    // in code test (for example in time for request api)
    setTimeout(() => {
      const filteredPallet = allPallets.filter((pallet) => pallet.id !== mainPalletID)
      setAllPallets(filteredPallet)
      localStorage.setItem('stock_items_create', JSON.stringify({ ...mainPallet, line: allPallets.length - 1 }))
    }, 2000)
  }

  return (
    <section className="flex-grow flex flex-col">
      <div className="flex-grow">
        <div className="px-4 pb-8 pt-3 mx-auto">
          <div className="mt-4">
            <div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between text-secondary">
              {/* در اینجا ریتچراک و تعداد پالت های ثبت شده ای صفحه اول را مشاهده کنید< */}
              <span className=""> لیچتراک : {mainPallet.vehicle_id} </span>
              <span className=""> تعداد پالت : {mainPallet.line} </span>
            </div>
          </div>
        </div>

        <div className="px-4 mx-auto">
          <div className="mt-0">
            <div className="p-4 bg-white shadow-md rounded-lg">
              {allPallets?.length > 0 ? (
                allPallets.map((item, index) => (
                  <div className="pallet-item mb-4 rounded-lg shadow-md p-4" key={item.id}>
                    <span
                      className="pallet-item__title flex justify-between items-center p-2 cursor-pointer"
                      onClick={() => openAccordionPallet(index)}>
                      <h3 className={item.isOpen ? 'text-secondary' : 'text-inherit'}> پالت {index + 1} </h3>
                      <svg
                        className={item.isOpen ? 'rotate-180 text-secondary' : 'rotate-0 text-inherit'}
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em">
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                      </svg>
                    </span>
                    <div
                      className={`pallet-item__body mt-8 transition-all   ${
                        item.isOpen ? 'visible block' : 'invisible hidden'
                      }`}>
                      <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          <CreateStockItemStep2InputBox
                            inputPlaceholder="کد Article"
                            inputTitle="کد Article"
                            inputValue={item.code}
                            register={register}
                            registerValue="articleCode"
                          />
                          <CreateStockItemStep2InputBox
                            inputPlaceholder=" شرح کالا "
                            inputTitle=" شرح کالا "
                            inputValue={item.name}
                            register={register}
                            isTextArea={true}
                            registerValue="productCaption"
                          />
                          <CreateStockItemStep2InputBox
                            inputPlaceholder=" لاین "
                            inputTitle=" لاین "
                            inputValue={item.line}
                            register={register}
                            registerValue="productLine"
                          />
                        </div>
                        {/* location */}
                        <h5 className="mt-6 text-gray-500">لوکیشن :</h5>
                        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
                          <StockItemStep2SelectBox
                            name="location-1"
                            register={register}
                            locations={location1}
                            defaultValue="0"
                          />
                          <StockItemStep2SelectBox
                            name="location-2"
                            register={register}
                            locations={location2}
                            defaultValue="0"
                          />
                          <StockItemStep2SelectBox
                            name="location-3"
                            register={register}
                            locations={location3}
                            defaultValue="A"
                          />
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={() => setMainPalletID(+item.id)}
                            className="mt-3 bg-green-500 font-medium text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-400">
                            ثبت
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                ))
              ) : (
                <span className="flex justify-center py-4 text-red-500">هیچ پالتی انتخاب نشده است </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateStockItemStep2
