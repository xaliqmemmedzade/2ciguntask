
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { routers } from './routers/index.jsx'

createRoot(document.getElementById('root')).render(
    <div className='max-w-[1140px] w-[80%] mx-[auto] my-[50px]'>
        <RouterProvider router={routers} />
    </div>


)
