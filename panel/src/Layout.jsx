import { baseURL } from "@api/useFetch.js";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Logo from "./assets/haft-logo.png"

function Layout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768 ? true : false);

  const user = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;

  // Function to handle sidebar toggle
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAutoCloseInMobile = () => {
    if(window.innerWidth < 768){
      setIsSidebarOpen(false);
      console.log("hi")
    }
  }

  return (
    <>
      <div className="text-gray-800 antialiased">
        <div
          className={`min-h-screen bg-gray-200 ${
            isSidebarOpen ? 'md:pr-[200px]' : ''
          }`}
        >
          {/* Sidebar */}
          <div
            className={`z-50 text-sm absolute top-0 drop-shadow-2xl md:w-[200px] w-full text-white bg-primary transition-all duration-200 h-full ${
              !isSidebarOpen ? '-right-full' : '-right-0'
            }`}
          >
            {/* Sidebar header */}
            <a href="#">
              <div className="flex items-center h-16 px-4 bg-primary text-xl text-white font-medium border-b-8 border-gray-500 mt-2">
                <img className="p-4" src={Logo} alt="مدیریت انبار" />
              </div>
            </a>
          
            <br />
            <div>
              {/* Sidebar links */}
              <div  onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <Link
                  to="/"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  محصولات در انبار
                </Link>
              </div>

              {
                user?.is_admin && <><div className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <a
                  href={`${baseURL}/data/export`}
                  className="router-link-exact-active router-link-active pb-2"
                >
                  خروجی اکسل
                </a>
              </div>

              <div onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <Link
                  to="/data/import"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  ورودی اکسل
                </Link>
              </div>

              <div onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <Link
                  to="/products/"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  محصولات
                </Link>
              </div>

              <div onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <Link
                  to="/vehicles/"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  نوع وسیله نقلیه
                </Link>
              </div>


              <div onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-500">
                <Link
                  to="/drivers/"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  رانندگان
                </Link>
              </div>

              <div onClick={() => {handleAutoCloseInMobile()}} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-">
                <Link
                  to="/users"
                  className="router-link-exact-active router-link-active pb-2"
                >
                  کاربران
                </Link>
              </div>
              </>
              }
               <div onClick={()=>{
                setIsSidebarOpen(false)
              }} className="px-3 py-3 text-white hover:bg-secondary transition-all duration-">
                <span
                  className="router-link-exact-active router-link-active pb-2"
                >
                  بستن منو
                </span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col">
            {/* Top navigation */}
            <div className="relative shadow-md bg-white flex-shrink-0 border-b-8 border-secondary">
              <div className="flex justify-between items-center h-16 px-12">
                <div>
                  <div className="relative w-64 flex">
                    <div
                      className="cursor-pointer"
                      onClick={toggleSidebar}
                    >
                      &#9776; {isSidebarOpen ? "بستن منو" : "باز کردن منو"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      {/* Your SVG icon code */}
                    </svg>
                  </a>
                  <div className="ml-6">
                    <div className="relative">
                      <button
                        onClick={() => {
                          localStorage.clear();
                          sessionStorage.clear();
                          window.location.href = "/login";
                        }}
                        type="button"
                        className="block w-full focus:outline-none"
                      >
                        خروج
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
