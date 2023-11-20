import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

export const baseURL = 'https://api.' + window.location.hostname
// export const baseURL = 'http://localhost:3000'

const useFetch = async ({
  url,
  method = 'GET',
  headers = {},
  body = null,
  params = {},
  formData = null, // Added formData parameter for image uploading
}) => {
  const queryParams = new URLSearchParams(params).toString()
  const fullURL = queryParams ? `${baseURL}${url}?${queryParams}` : baseURL + url

  const options = {
    method,
    headers: {
      ...headers,
    },
  }

  // Check if there is a JWT token in localStorage
  const token = localStorage.getItem('token')

  if (token) {
    // Add the JWT token to the Authorization header
    options.headers['Authorization'] = `Bearer ${token}`
  }

  if (body) {
    options.body = JSON.stringify(body)
    options.headers = { ...options.headers, 'Content-Type': 'application/json' }
  } else if (formData) {
    // Handle image uploading
    options.body = formData
  }

  try {
    const response = await fetch(fullURL, options)

    // console.log({response})

    if (response.status === 401) {
      toast('نیاز به ورود مچدد', 'error', {
        toastId: 'use-fetch',
      })
      localStorage.clear()
      window.location.href = '/login'
    }

    if (response.status === 403) {
      toast('شما به اطلاعات این صفحه دسترسی ندارید', 'error', {
        toastId: 'use-fetch',
      })
    }

    if (!response.ok) {
      toast('خطا در ارتباط با سرور', 'error', {
        toastId: 'use-fetch',
      })
      throw new Error('Network response was not ok')
    }

    return response.json()
  } catch (error) {
    toast('خطا در ارتباط با سرور', 'error', {
      toastId: 'use-fetch',
    })

    throw new Error(`Error: ${error.message}`)
  }
}

export default useFetch
