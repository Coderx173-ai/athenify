import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className='w-full bg-[#09212c] min-h-[450px] mt-[-95px] pt-[160px]'>
        <div className="content-wrapper px-2 md:px-[54px] h-full">
            <div className='border border-green-400 rounded-md max-w-[450px] w-full py-12 mx-auto my-auto  flex flex-col items-center gap-10'>
                <h4 className='text-yellow-400 text-3xl text-center'>Payment Successful !!!</h4>
                <Link href={"/"} className='text-white bg-green-700 px-6 py-2 rounded-lg text-xl'>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}

export default SuccessPage