import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import {ToastContainer} from 'react-toastify'
import { useGetTokenQuery } from './store/slice/api'
import { useDispatch } from 'react-redux'
import { loginsuccess } from './store/slice/authslice'
function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const{ data } = useGetTokenQuery();
  
  useEffect(()=>{
    if(data?.status){
      dispatch(loginsuccess(data?.token))
    }
  },[data,dispatch])

  return (
    <>
   <RouterProvider router={routes}></RouterProvider>
   <ToastContainer></ToastContainer>
    </>
  )
}

export default App
