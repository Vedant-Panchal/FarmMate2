import React from 'react'

// Sign up for our newsletter
// For plant care tips, our featured plant of the week, exclusive offers and discounts



const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-start gap-2 flex-wrap max-lg:flex-col bg-slate-100'>
        <div className='flex flex-col items-start'>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>
              About us
              </h4>
              <ul>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Our Story
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Careers
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Contact Us
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Locate Stores
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Own Grown
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Garden Services & Maintenance
                  </li>
              </ul>
            </div>
        </div>
      </div>
        <div className='flex flex-col items-start'>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>
              Customer Care
              </h4>
              <ul>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Take The Plant Quiz
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Track Order
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Shipping Policy
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Terms and Conditions
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Privacy Policy
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    FAQs
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Terms of Service
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Refund policy
                  </li>
              </ul>
            </div>
        </div>
      </div>
        <div className='flex flex-col items-start'>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>
              Offers & Rewards
              </h4>
              <ul>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Plant Parent Rewards Club
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Ugaoo Coupons
                  </li>
              </ul>
            </div>
        </div>
      </div>
        <div className='flex flex-col items-start'>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>
              Get in touch
              </h4>
              <ul>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Call : +91-9129-9129-91
                  </li>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    Email : support@ugaoo.comns

                  </li>
              </ul>
            </div>
        </div>
      </div>
        <div className='flex flex-col items-start'>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            <div>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6'>
              Sign up for our newsletter
              </h4>
              <ul>
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                    For plant care tips
                  </li>
              </ul>
            </div>
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src=""
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p> 2024, Ugaoo. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </div>
    </footer>
  );
  
};

export default Footer