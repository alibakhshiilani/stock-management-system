import useLogin from "@api/user/useLogin.js";
import Input from "@components/input/Input.jsx";
import { useUser } from "@store/UserContext.jsx";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/haft-logo.png"


const Auth = () => { 

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const loginMutation = useLogin();

  let navigate = useNavigate();

  const { login } = useUser();

  const onSubmit = async data => {
    // console.log({data})
    const loginData = await loginMutation.mutateAsync(data);
    console.log({loginData})
    if(loginData?.mobile && loginData?.token){
      console.log({loginData})
      localStorage.setItem("token",loginData.token)
      localStorage.setItem("userData",JSON.stringify(loginData))
    }
    setTimeout(()=>{
      window.location.href = "/stock_items/create"
    },700)
  };


    return <>
    {/* {
      bcrypt.hash("123456")
    } */}
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div className="my-3 text-2xl font-bold text-center">
          <img width={200} src={Logo} alt="سیستم مدیریت انبار" />
          <a href="#">سیستم مدیریت انبار</a>
        </div>
        <p className="mt-6 font-thin text-center text-gray-300 md:mt-0">
        به صفحه ورود به سیستم مدیریت انبار خوش آمدید. اینجا شما می‌توانید وارد حساب کاربری خود شوید تا به بهترین شکل موجودی انبار خود را مدیریت کرده و عملیات مرتبط با انبار را انجام دهید. لطفاً اطلاعات حساب کاربری خود را وارد کنید تا به پنل مدیریتی دسترسی پیدا کنید. 
        </p>
      </div>
      <div className="p-5 bg-white md:flex-1">
        <h3 className="my-4 text-lg font-semibold text-gray-700">ورود به سیستم</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">

        
        {/* <button className='bg-green-500 w-full font-medium text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-400' type="submit">ذخیره</button> */}
        <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">کد پرسنلی</label>
            <Input register={register("mobile",{
              required:"کد پرسنلی الزامی است"
            })} errors={errors} name="mobile" placeholder={"کد پرسنلی"} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label for="password" className="text-sm font-semibold text-gray-500">رمزعبور</label>
            <Input register={register("password",{
              required:"رمزعبور الزامی است"
            })} errors={errors} name="password" placeholder={"رمزعبور"} className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
       
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              ورود
            </button>
          </div>
          
        </form>
      </div>
    </div>
  </div></>
}

export default Auth