// Map.jsx

import React from 'react';
import Selector from '../components/SearchComponent';
import useCsvHeaders from '../Hooks/CSV-Custom';
import useGhlFields from '../Hooks/CSV-Ghl';
import Loader from '../components/loader';
import Error404 from '../components/404Page'

const Map = () => {
  const { csvHeaders, loading: csvLoading, error: csvError } = useCsvHeaders();
  const { ghlFields, loading: ghlLoading, error: ghlError } = useGhlFields();

  const loading = csvLoading || ghlLoading;
  const error = csvError || ghlError;

  if (loading) {
    // Add loading indicator or handle loading state
    return <Loader />;
  }

  if (error) {
    // Handle error state
    return <Error404/>;
  }

  // Continue with your component logic using csvHeaders
  // ...

  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-1/3">
              CSV-Header
            </th>
            <th scope="col" className="px-6 py-3 w-1/3">
              GHL Fields
            </th>
            <th scope="col" className="px-6 py-3 w-1/3">
              Cummulative
            </th>
          </tr>
        </thead>
        <tbody>
          {ghlFields.map((field, index) => (
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {field}
              </th>
              <td className="px-6 py-4 ">
                <Selector
                  options={['OptionX', 'OptionY', 'OptionZ']} // GHL field options
                  onSelect={(selected) => console.log(selected)} // Handle selection
                  selectedValue={'Selected GHL Field'} // Selected GHL field value
                  placeholder="Select GHL Field" // Placeholder text
                />
              </td>
              <td className="px-6 py-4">
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
                    <p className="text-xs font-normal text-gray-500 dark:text-gray-300">Checkbox description or additional information</p>
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
//         "status",
//         "shipping_total",
//         "shipping_tax_total",
//         "fee_total",
//         "fee_tax_total",
//         "tax_total",
//         "cart_discount",
//         "order_discount",
//         "discount_total",
//         "order_total",
//         "order_subtotal",
//         "order_key",
//         "order_currency",
//         "payment_method",
//         "payment_method_title",
//         "transaction_id",
//         "customer_ip_address",
//         "customer_user_agent",
//         "shipping_method",
//         "customer_id",
//         "customer_user",
//         "customer_email",
//         "billing_first_name",
//         "billing_last_name",
//         "billing_company",
//         "billing_email",
//         "billing_phone",
//         "billing_address_1",
//         "billing_address_2",
//         "billing_postcode",
//         "billing_city",
//         "billing_state",
//         "billing_country",
//         "shipping_first_name",
//         "shipping_last_name",
//         "shipping_company",
//         "shipping_phone",
//         "shipping_address_1",
//         "shipping_address_2",
//         "shipping_postcode",
//         "shipping_city",
//         "shipping_state",
//         "shipping_country",
//         "customer_note",
//         "wt_import_key",
//         "shipping_items",
//         "fee_items",
//         "tax_items",
//         "coupon_items",
//         "refund_items",
//         "order_notes",
//         "download_permissions",
//         "meta:_wcpdf_invoice_number",
//         "meta:_wcpdf_invoice_date",
//         "meta:_wcpdf_invoice_number_data",
//         "meta:_wcpdf_invoice_date_formatted",
//         "meta:_wcpdf_invoice_settings",
//         "meta:_ppcp_paypal_fees",
//         "meta:_stripe_fees",
//         "item_product_id",
//         "item_name",
//         "item_sku",
//         "item_quantity",
//         "item_subtotal",
//         "item_subtotal_tax",
//         "item_total",
//         "item_total_tax",
//         "item_refunded",
//         "item_refunded_qty",
//         "item_meta",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
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

