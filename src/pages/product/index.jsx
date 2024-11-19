import React from 'react'
import Pagination from '../../components/Pagination'
import { useNavigate } from 'react-router-dom'

function index() {

    const nav = useNavigate()
    return (<div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {new Array(10).fill({}).map((_, k) => {
                    let img = (k % 4) + 1
                    return <div className="group relative" key={k} onClick={()=> nav('/shop/idfijsoij')}>
                        <img src={`https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-0${img}.jpg`} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                })}
                {/* <!-- More products... --> */}
            </div>

            <Pagination />
        </div>
    </div>

    )
}

export default index