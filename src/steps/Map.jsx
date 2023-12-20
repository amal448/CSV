// import React, { useRef } from 'react';
// // import Select from 'react-select';
// import Selector from '../components/SearchComponent';

// const Map = () => {
//   const dropdownPortalTarget = useRef(null);
//   const csvHeaders = [
//     "order_id",
//         "order_number",
//         "order_date",
//         "paid_date",
//         "",
//         ""
//     ];

//   return (

//  <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3 w-1/3">
//               CSV-Header
//             </th>
//             <th scope="col" className="px-6 py-3 w-1/3">
//               GHL Fields
//             </th>
//             <th scope="col" className="px-6 py-3 w-1/3">
//               Cummulative
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {csvHeaders.map((header, index) => (
//             <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 {header}
//               </th>
//               <td className="px-6 py-4 ">
//                 <Selector />
//               </td>
//               <td className="px-6 py-4">
//                 <div className="flex">
//                   <div className="flex items-center h-5">
//                     <input
//                       id={`checkbox-${index}`}
//                       type="checkbox"
//                       value=""
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                   </div>
//                   <div className="ms-2 text-sm">
//                     <label htmlFor={`checkbox-${index}`} className="font-medium text-gray-900 dark:text-gray-300">Your Checkbox Label</label>
//                     <p className="text-xs font-normal text-gray-500 dark:text-gray-300">Checkbox description or additional information</p>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div> 
//   );
// };

// export default Map;


import React from 'react';
import useCsvHeaders from '../Custom-Hook/CSV-Header';
import useGHLFields from '../Custom-Hook/GHL-field';

import Loader from '../components/loader';
import Error404 from '../components/Error';
import Selector from '../components/SearchComponent'; // Update the path accordingly

const Map = () => {
  const { csvHeaders, loading: csvLoading, error: csvError } = useCsvHeaders();
  const { ghlFields, loading: ghlLoading, error: ghlError } = useGHLFields();

  if (csvLoading || ghlLoading) {
    return <Loader />;
  }

  if (csvError || ghlError) {
    return <Error404 />;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
            <th scope="col" className="px-6 py-3 w-1/3">
               CSV-Header             </th>
             <th scope="col" className="px-6 py-3 w-1/3">
               GHL Fields
             </th>
            <th scope="col" className="px-6 py-3 w-1/3">
               Cummulative
             </th>
           </tr>
         </thead>
        <tbody>
          {csvHeaders.map((header, index) => (
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {header}
              </th>
              <td className="px-6 py-4 ">
                <Selector options={ghlFields} onSelect={(selectedField) => console.log(selectedField)} />
              </td>
              <td className="px-6 py-4">
                {/* Your checkbox code */}
                                 <div className="flex">
                   <div className="flex items-center h-5">
                     <input
                       id={`checkbox-${index}`}
                     type="checkbox"
                     value=""
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                     />
                   </div>
                  <div className="ms-2 text-sm">
                    <label htmlFor={`checkbox-${index}`} className="font-medium text-gray-900 dark:text-gray-300">Your Checkbox Label</label>
                    {/* <p className="text-xs font-normal text-gray-500 dark:text-gray-300">Checkbox description or additional information</p> */}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Map;




