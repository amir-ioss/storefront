import React from 'react'
import Summaries from './summaries'
import OrderForm from './OrderForm'
import ContactShippingInfo from './ContactShippingInfo'
import DeliveryPayment from './DeliveryPayment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// https://tailwindui.com/components/ecommerce/components/checkout-forms

function index() {
  return (
    <div className='bg-white '>
      <Header />
      <div className='bg-white max-w-7xl pt-32 m-auto'>
        <div className='flex gap-x-20'>
          <div className='flex-1'>
            <ContactShippingInfo />
            <DeliveryPayment />
          </div>
          <div className='flex-1'>
            <OrderForm />
          </div>
        </div>
        <Summaries />
        <Footer />
      </div>
    </div>

  )
}

export default index