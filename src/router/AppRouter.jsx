import { Route, Routes } from 'react-router-dom'

import { HomePage, MyAccountPage, MyOrdersPage, SingleOrderPage, LoginPage } from '../pages'

import { Clothes, Electronics, Furniture, NavBar, Others, Toys } from '../components'
import {SignUpPage} from '../pages/SignUpPage'



export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='clothes' element={ <Clothes /> } />
            <Route path='electronics' element={ <Electronics /> } />
            <Route path='furniture' element={ <Furniture /> } />
            <Route path='toys' element={ <Toys /> } />
            <Route path='others' element={ <Others /> } />

            <Route path='login' element={ <LoginPage />} />
            <Route path='sign-up' element={ <SignUpPage />} />

            
            <Route path='my-orders' element={ <MyOrdersPage />} />
            <Route path='my-orders/:orderId' element={ <SingleOrderPage />} />
            <Route path='my-account' element={ <MyAccountPage />} />

        </Routes>
    </>
  )
}
