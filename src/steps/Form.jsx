import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Papa from 'papaparse';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '../store/actions/stepperActions';
import {registerData} from '../Helpers/userHelpers'

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).required('Username is required'), // Use 'username' instead of 'name'
  email: Yup.string().email('Please Enter Valid Email').required('Email is required'),
  file: Yup.mixed()
    .test('fileType', 'Invalid file type. Only CSV files are allowed.', (value) => {
      if (!value) return true; // If no file is selected, validation passes

      return value && ['text/csv'].includes(value.type);
    })
    .required('Please upload a CSV file.'),
    locationId: Yup.string().required('Location Id is required'),
    
});

const Form = () => {
  const dispatch = useDispatch(); 
  const currentStep = useSelector((state) => state.stepper.currentStep);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      file: null, // Initialize file state
      locationId:''
    },
    validationSchema,
    
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      try {
     
        const register = registerData(values)
        const submissionSuccessful = true;

        if (submissionSuccessful) {
          dispatch(setCurrentStep(currentStep + 1));
        } else {
          // Handle submission failure if needed
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle API call error if needed
      }


      // You can perform additional actions here
    },
  });

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        // Handle the parsed data as needed
        console.log(result.data);
      },
    });

    // Set the file in formik state
    formik.setFieldValue('file', event.currentTarget.files[0]);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-3 rounded shadow-md w-full">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-md font-semibold mb-6 uppercase">Upload your file</h5>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                Username
              </label>
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500 text-xs">{formik.errors.username}</div>
              )}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs">{formik.errors.email}</div>
              )}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Location Id
              </label>
              {formik.touched.locationId && formik.errors.locationId && (
                <div className="text-red-500 text-xs">{formik.errors.locationId}</div>
              )}
              <input
                type="text"
                id="locationId"
                name="locationId"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.locationId}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-4"
            >
              <label htmlFor="dropzone-file" className="mb-2 text-sm text-gray-600 font-medium">
                Upload
              </label>
              {formik.touched.file && formik.errors.file && (
                <div className="text-red-500 text-xs">{formik.errors.file}</div>
              )}
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">CSV file (MAX. 800x400px)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                name="file"
                accept=".csv"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;