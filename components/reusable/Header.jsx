import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <header className='text-gray-600 body-font pl-32 pr-32'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-orange-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg> */}
            <Image
              src='/logo.png'
              alt='me'
              width='52'
              height='52'
              className='rounded-full'
            />
            <div className='flex gap-12 items-center'>
              <span className='ml-3 text-xl'>RawatAku</span>
              <div>
                <input
                  type='text'
                  id='hero-field'
                  name='hero-field'
                  className='w-full border focus:ring-0 border-grayLight outline-none bg-gray-100 rounded bg-opacity-50 focus:bg-transparent focus:border-indigo-500 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
          </a>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-gray-900 font-medium hover:text-orange hover:border-b-2 cursor-pointer'>Home</a>
            <a className='mr-5 hover:text-gray-900 font-medium hover:text-orange hover:border-b-2 cursor-pointer'>
              Info Kesehatan
            </a>
            <a className='mr-5 hover:text-gray-900 font-medium hover:text-orange hover:border-b-2 cursor-pointer'>Blog</a>
            <a className='mr-5 hover:text-gray-900 font-medium hover:text-orange hover:border-b-2 cursor-pointer'>About Us</a>
          </nav>
          <div className='flex gap-4'>
            <button className='inline-flex items-center bg-orange text-white border-0 py-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
              Login
            </button>
            <button className='inline-flex items-center bg-gray-100 border py-3 px-4 border-orange focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
              Register
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
