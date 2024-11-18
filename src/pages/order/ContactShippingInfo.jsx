import React from 'react';

const ContactShippingInfo = () => {
    return (
        <div className="flex-1 bg-white rounded-2xl p-6 space-y-6">
            <div>
                <label htmlFor="email" className="block text-gray-700 font-medium text-sm mb-1">
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium text-sm mb-1">
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium text-sm mb-1">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="company" className="block text-gray-700 font-medium text-sm mb-1">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                />
            </div>

            <div>
                <label htmlFor="address" className="block text-gray-700 font-medium text-sm mb-1">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                />
            </div>

            <div>
                <label htmlFor="apartment" className="block text-gray-700 font-medium text-sm mb-1">
                    Apartment, suite, etc.
                </label>
                <input
                    type="text"
                    id="apartment"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium text-sm mb-1">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    />
                </div>
                <div>
                    <label htmlFor="country" className="block text-gray-700 font-medium text-sm mb-1">
                        Country
                    </label>
                    <select
                        id="country"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    >
                        <option>United States</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label htmlFor="state" className="block text-gray-700 font-medium text-sm mb-1">
                        State / Province
                    </label>
                    <input
                        type="text"
                        id="state"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    />
                </div>
                <div>
                    <label htmlFor="postalCode" className="block text-gray-700 font-medium text-sm mb-1">
                        Postal code
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium text-sm mb-1">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm py-2 px-3"
                />
            </div>
        </div>
    );
};

export default ContactShippingInfo;