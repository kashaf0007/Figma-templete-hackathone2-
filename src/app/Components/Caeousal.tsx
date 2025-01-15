import React from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'

const Caeousal = () => {
  return (

        <div className="py-16 bg-white">
      <h1 className="text-4xl font-extrabold bg-white text-left ml-8 mb-12 flex items-center justify-between">
        <div>OUR HAPPY CUSTOMERS</div>
      </h1>
      
      <section className="text-gray-600 body-font">
    <div className="flex flex-wrap -m-4 ml-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full border-black border bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                   Sarah M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
         <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex K.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
            I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
 <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white  border-black border p-8 flex-col mr-4">
          <div className="flex items-center mb-3">
          <h2 className="text-gray-900 text-lg title-font font-medium flex">
                <FaStar className="text-yellow-500 mb-4 " />
                <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
                 <FaStar className="text-yellow-500 mb-4" />
            </h2>
          </div>
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold flex">
                      Alex M.
                      <div className='w-[25px] h-[25px] bg-[#54d152] rounded-full  flex justify-center items-center'><FaCheck className='text-white opacity '/></div>
                    </h2>
                     <div className="flex-grow">
            <p className="leading-relaxed text-base">
          As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
            </p>
          </div>
          </div>
       </div>
       </div>
  
</section>

    </div>
  )
}

export default Caeousal
