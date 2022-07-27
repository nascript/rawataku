import React from 'react'

const Highlight = () => {
  return (
    <div className="mt-24">
      <section className='text-gray-600 body-font pl-32 pr-32'>
        <div className='container px-5  mx-auto flex flex-wrap'>
          <div className='flex flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-full'>
                <img
                  className='h-96 rounded w-full object-cover object-center mb-6'
                  src='https://dummyimage.com/722x402'
                  alt='content'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  SUBTITLE
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Great Pyramid of Giza
                </h2>
                <p className='leading-relaxed text-base'>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-full'>
                <img
                  alt='gallery'
                  className='w-full h-60 object-cover object-center block rounded  mb-6'
                  src='https://dummyimage.com/601x361'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  SUBTITLE
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Great Pyramid of Giza
                </h2>
                <p className='leading-relaxed text-base'>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <div className='relative flex py-5 items-center'>
                  <div className='flex-grow border-t border-gray-400 border-dashed border-grayLight'></div>
                  <div className='flex-grow border-t border-gray-400 border-dashed border-grayLight'></div>
                </div>
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <img
                  alt='gallery'
                  className='w-full object-cover h-full object-center block rounded  mb-6'
                  src='https://dummyimage.com/502x302'
                />
              </div>
              <div className='md:p-2 p-1 w-1/2'>
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  SUBTITLE
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Great Pyramid of Giza
                </h2>
                <p className='leading-relaxed text-base'>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className='relative flex py-5 items-center'>
        <div className='flex-grow border-t border-gray-400 border-dashed border-grayLight'></div>
        <div className='flex-grow border-t border-gray-400 border-dashed border-grayLight'></div>
      </div>
      </section>
    </div>
  )
}

export default Highlight
