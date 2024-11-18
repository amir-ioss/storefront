import React from 'react';
// import { Check } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            {/* <Check size={20} /> */}
            <span className="text-sm">Payment successful</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Thanks for ordering</h1>
          <p className="text-gray-600">
            We appreciate your order, we're currently processing it. So hang tight and we'll send you confirmation very soon!
          </p>
        </div>

        {/* Tracking Number */}
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-1">Tracking number</div>
          <div className="font-mono">51547876753545848512</div>
        </div>

        {/* Order Items */}
        <div className="space-y-4 mb-8">
          {/* Basic Tee */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded"></div>
            <div className="flex-1">
              <h3 className="font-medium">Basic Tee</h3>
              <p className="text-gray-600">Charcoal</p>
              <p className="text-gray-600">L</p>
            </div>
            <div className="font-medium">$36.00</div>
          </div>

          {/* Artwork Tee */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded"></div>
            <div className="flex-1">
              <h3 className="font-medium">Artwork Tee — Iso Dots</h3>
              <p className="text-gray-600">Peach</p>
              <p className="text-gray-600">S</p>
            </div>
            <div className="font-medium">$36.00</div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">$72.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">$8.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxes</span>
            <span className="font-medium">$6.40</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="font-medium">Total</span>
            <span className="font-medium">$86.40</span>
          </div>
        </div>

        {/* Shipping and Payment Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 border-t pt-8">
          <div>
            <h3 className="font-medium mb-2">Shipping Address</h3>
            <div className="text-gray-600">
              <p>Kristin Watson</p>
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Payment Information</h3>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm">VISA</div>
              <span className="text-gray-600">Ending with 4242</span>
            </div>
            <div className="text-gray-600">Expires 12/21</div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-8 text-center">
          <button className="text-purple-600 font-medium hover:text-purple-700">
            Continue Shopping →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;