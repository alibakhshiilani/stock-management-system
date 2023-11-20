import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Layout from './Layout.jsx'
import './index.css'
import Auth from '@pages/auth/Auth.jsx'
import Dashboard from '@pages/dashboard/Dashboard.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Stock from '@pages/stock/Stock.jsx'
import Product from '@pages/product/Product.jsx'
import CreateStock from '@pages/stock/CreateStock.jsx'
import { ToastContainer } from 'react-toastify'
import User from '@pages/users/Users.jsx'
import CreateStockItem from '@pages/dashboard/CreateStockItem.jsx'
import CreateProduct from '@pages/product/CreateProduct.jsx'
import CreateUser from '@pages/users/CreateUser.jsx'
import Protected from '@components/Protected.jsx'
import NotFound from '@pages/errors/NotFound.jsx'
import UpdareProduct from '@pages/product/UpdateProduct.jsx'
import UpdateStockItem from '@pages/dashboard/UpdateStockItem.jsx'
import { UserProvider } from '@store/UserContext.jsx'
import ImportData from '@pages/data/ImportData.jsx'
import Vehicle from '@pages/vehicle/Vehicle.jsx'
import CreateVehicle from '@pages/vehicle/CreateVehicle.jsx'
import UpdateVehicle from '@pages/vehicle/UpdateVehicle.jsx'
import Driver from '@pages/driver/Driver.jsx'
import CreateDriver from '@pages/driver/CreateDriver.jsx'
import UpdateDriver from '@pages/driver/UpdateDriver.jsx'
import CreateStockItemStep1 from '@pages/dashboard/CreateStockItemStep1.jsx'
import CreateStockItemStep2 from '@pages/dashboard/CreateStockItemStep2.jsx'

const queryClient = new QueryClient()

const isSignedIn = !!localStorage.getItem('token')

console.log('isSignedIn', isSignedIn)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: '/data/import',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <ImportData />
          </Protected>
        ),
      },
      {
        path: '/stock_items/create/:id',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateStockItem />
          </Protected>
        ),
      },
      {
        path: '/stock_items/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateStockItemStep1 />
          </Protected>
        ),
      },
      {
        path: '/stock_items/:id',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <UpdateStockItem />
          </Protected>
        ),
      },
      {
        path: '/stock_items/update',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateStockItemStep2 />
          </Protected>
        ),
      },
      {
        path: '/stocks',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <Stock />
          </Protected>
        ),
      },
      {
        path: '/stocks/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateStock />
          </Protected>
        ),
      },

      // {
      //   path: "/stocks/:id",
      //   element: <Protected isSignedIn={isSignedIn}><UpdateStock /></Protected>,
      // },
      {
        path: '/users',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <User />
          </Protected>
        ),
      },
      {
        path: '/users/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateUser />
          </Protected>
        ),
      },
      {
        path: '/products',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <Product />
          </Protected>
        ),
      },
      {
        path: '/products/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateProduct />
          </Protected>
        ),
      },
      {
        path: '/products/:id',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <UpdareProduct />
          </Protected>
        ),
      },
      {
        path: '/vehicles',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <Vehicle />
          </Protected>
        ),
      },
      {
        path: '/vehicles/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateVehicle />
          </Protected>
        ),
      },
      {
        path: '/vehicles/:id',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <UpdateVehicle />
          </Protected>
        ),
      },
      {
        path: '/drivers',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <Driver />
          </Protected>
        ),
      },
      {
        path: '/drivers/create',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <CreateDriver />
          </Protected>
        ),
      },
      {
        path: '/drivers/:id',
        element: (
          <Protected isSignedIn={isSignedIn}>
            <UpdateDriver />
          </Protected>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        {/* <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}> */}
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
    <ToastContainer />
    {/* </IntlProvider>, */}
  </React.StrictMode>,
)
