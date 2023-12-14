import React from 'react'

const Form = () => {
  return (
<div className=" flex items-center justify-center">

<div className="bg-white p-3 rounded shadow-md w-full">
  <h2 className="text-2xl font-semibold mb-6">Upload Your Data</h2>

  <form className="flex flex-col gap-4">
    {/* Username and Password row */}
    <div className="flex gap-4">
      <div className="w-1/2">
        <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
        <input type="text" id="username" name="username" placeholder='Enter Your Name' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="w-1/2">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
        <input type="text" id="email" name="email"placeholder='Enter your email'  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
    </div>

    {/* File uploader row */}
    <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>

    {/* Submit button */}
    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
  </form>
</div>

</div>
  )
}

export default Form
