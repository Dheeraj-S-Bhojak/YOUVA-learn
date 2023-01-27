import React from "react";

const BannerForm: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-60 flex flex-col '>
      <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border rounded-md border-gray-300'>
        <div className='text-3xl font-bold text-gray-900 mt-2 '>
          Lorem ipsum dolor sit amet.
        </div>
        <div className='text-3l text-gray-400 mt-2 '>
          Fill in the form below to get instant access
        </div>

        <form action='' className='space-y-6'>
          <div>
            <div className='relative'>
              <input
                type='text'
                id='Name'
                className='block px-2.5 pb-2.5 py-4 my-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='Name'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
              >
                Name
              </label>
            </div>
            <div className='relative'>
              <input
                type='email'
                id='Email'
                className='block px-2.5 pb-2.5 pt-4 my-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='Email'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
              >
                Email
              </label>
            </div>
            <div className='relative'>
              <input
                type='tel'
                id='Phone_Number'
                className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='Phone_Number'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
              >
                Phone Number
              </label>
            </div>
            <button className='bg-blue-500 hover:bg-green-700 text-white font-bold py-2 mt-6 px-4 rounded'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BannerForm;
