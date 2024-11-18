import React from 'react'
import Summaries from './summaries'
import OrderForm from './OrderForm'
import ContactShippingInfo from './ContactShippingInfo'
import DeliveryPayment from './DeliveryPayment'
import Header from '../../components/Header'

// https://tailwindui.com/components/ecommerce/components/checkout-forms

function index() {
  return (
    <>
      <Header />
      <div className='bg-white px-64'>
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
      </div>
    </>

  )
}

export default index