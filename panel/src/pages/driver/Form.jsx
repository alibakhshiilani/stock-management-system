import Input from '@components/input/Input.jsx';
import { useForm } from 'react-hook-form';

const Form = ({onSubmit,defaultValues}) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({defaultValues:defaultValues || {}});

  // console.log("props",props)

  return <form onSubmit={handleSubmit(onSubmit)} ini>

<label for="name" className="text-sm mb-2 block font-normal text-gray-500">نام راننده</label>
  <Input register={register("name",{
      required:"نام راننده الزامی است"
    })} errors={errors} name="name" placeholder={"نام راننده"}/>
    <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button>
  </form>
    


}

export default Form
