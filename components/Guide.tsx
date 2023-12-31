import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container
      max-container w-full pb-24'>
        <Image src="/camp.svg" alt='camp' width={50} height={50} />
        <p className='regular-18 -mt-1 mb-3 text-green-50'>
          WE ARE HERE FOR YOU
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-24 md:bold-32 2xl:bold-64 xl:max-w-[390px]'>Guide You The Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Only with SamSoft Logistics, you'll no longer stress about how
            you get your belongings whatever the destination may be.
            Invite your friends, relatives to experience our reliable 
            services.
          </p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full '>
        <Image
          src="/image-8.jpeg"
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl
        border shadow-md md:left-[5%] lg:top-20'>
          <Image
            src="/meter.svg"
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>6hrs</p>
              </div>
              <p className='bold-20 mt-2'>Accra, Greater Accra Region</p>
            </div>
            <div className='flexBetween w-full'>
              <p className='regular-16 text-gray-20'>Start</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Kumasi, Ashanti Region</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide