import React from 'react';

const DeliveryPayment = () => {
  return (
    <div className="flex-1 bg-white rounded-2xl p-6 space-y-6">
      {/* Delivery Method */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 font-medium text-sm">Delivery method</label>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="standard"
              name="deliveryMethod"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="standard" className="text-gray-700 text-sm">
              Standard (4-10 business days)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="express"
              name="deliveryMethod"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="express" className="text-gray-700 text-sm">
              Express (2-5 business days)
            </label>
          </div>
          <span className="text-gray-900 font-medium text-sm">$5.00</span>
        </div>
      </div>

      {/* Payment */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 font-medium text-sm">Payment</label>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="creditCard" className="text-gray-700 text-sm">
              Credit card
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="paypal" className="text-gray-700 text-sm">
              PayPal
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="etransfer"
              name="paymentMethod"
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="etransfer" className="text-gray-700 text-sm">
              eTransfer
            </label>
          </div>
        </div>
      </div>

      {/* Credit Card Details */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="cardNumber" className="block text-gray-700 font-medium text-sm mb-1">
            Card number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
          />
        </div>
        <div>
          <label htmlFor="nameOnCard" className="block text-gray-700 font-medium text-sm mb-1">
            Name on card
          </label>
          <input
            type="text"
            id="nameOnCard"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="expirationDate" className="block text-gray-700 font-medium text-sm mb-1">
            Expiration date (MM/YY)
          </label>
          <input
            type="text"
            id="expirationDate"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
          />
        </div>
        <div>
          <label htmlFor="cvc" className="block text-gray-700 font-medium text-sm mb-1">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPayment;