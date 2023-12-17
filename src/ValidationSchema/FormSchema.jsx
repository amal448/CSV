import * as Yup from 'yup'

export const formValidation =Yup.object({
    name:Yup.string().min(3).required(),
    email:Yup.string().email("Please Enter Valid Email").required(),
    file: Yup.mixed()
    .test('fileType', 'Invalid file type. Only CSV files are allowed.', (value) => {
      if (!value) return true; // If no file is selected, validation passes

      return value && ['text/csv'].includes(value.type);
    })
    .required('Please upload a CSV file.'),
})