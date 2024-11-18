import React from 'react'


const OrderSummary = () => {
    return (
        <div className="bg-white  p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
                    <div>
                        <h3 className="font-medium text-gray-900">Basic Tee</h3>
                        <p className="text-gray-600">Black, Large</p>
                    </div>
                </div>
                <div className="font-medium text-gray-900">$32.00</div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl"></div>
                    <div>
                        <h3 className="font-medium text-gray-900">Basic Tee</h3>
                        <p className="text-gray-600">Sienna, Large</p>
                    </div>
                </div>
                <div className="font-medium text-gray-900">$32.00</div>
            </div>

            <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-medium text-gray-900">$64.00</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Shipping</span>
                    <span className="font-medium text-gray-900">$5.00</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Taxes</span>
                    <span className="font-medium text-gray-900">$5.52</span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-medium text-gray-900">Total</span>
                    <span className="font-medium text-gray-900">$75.52</span>
                </div>
            </div>

            <button className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Confirm order
            </button>
        </div>
    );
};


export default OrderSummary