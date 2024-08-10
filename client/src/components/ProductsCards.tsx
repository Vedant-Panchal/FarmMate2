import React from 'react'

const ProductsCards = () => {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <img src="https://www.ugaoo.com/cdn/shop/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175" alt="Plant Image" 
                className="w-12 h-12"/>
            <h1 className=' text-2xl'>
                Best Sellers
            </h1>
        </div>
        <div>
            <div className='flex gap-8 h-[570px]'>
                <div>
                    <img src="https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" alt="" className='rounded-xl'/>
                    <h2 className='text-xl mb-12'>Peace Lily Plant</h2>
                    <div>
                        $
                    </div>
                    <div className='text-center text-white bg-green-700 h-9 mt-10 flex justify-center items-center'>VIEW PRODUCT</div>
                </div>
                <div>
                    <img src="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355&width=375" alt="" />
                    <h2 className='text-xl mb-12'>Bamboo Palm Plant</h2>
                    <div>$</div>
                    <div className='text-center text-white bg-green-700 h-9 mt-10 flex justify-center items-center'>VIEW PRODUCT</div>
                </div>
                <div>
                    <img src="https://www.ugaoo.com/cdn/shop/files/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.jpg?v=1706608270&width=375" alt="" />
                    <h2 className='text-xl mb-12'>Monstera Deliciosa Plant</h2>
                    <div>$</div>
                    <div className='text-center text-white bg-green-700 h-9 mt-10 flex justify-center items-center'>VIEW PRODUCT</div>
                </div>
                <div>
                    <img src="https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375" alt="" />
                    <h2 className='text-xl mb-12'>Jade Plant Mini</h2>
                    <div>$</div>
                    <div className='text-center text-white bg-green-700 h-9 mt-10 flex justify-center items-center'>VIEW PRODUCT</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='text-center text-white bg-green-700 w-[220px] h-9 flex items-center justify-center'>VIEW ALL</div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCards