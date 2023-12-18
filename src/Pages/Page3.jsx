// Page3.jsx

import React, { useState, useRef, useEffect } from 'react';
import Selector from '../components/SearchComponent';
import useCsvHeaders from '../Hooks/CSV-Custom';
import Loader from '../components/loader';
import Error404 from '../components/404Page';
const Page3 = () => {

  const { csvHeaders, loading, error } = useCsvHeaders();

  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [firstDropdownWidth, setFirstDropdownWidth] = useState(null);
  const firstDropdownRef = useRef(null);

  useEffect(() => {
    // Get the width of the first dropdown when it's mounted
    if (firstDropdownRef.current) {
      setFirstDropdownWidth(firstDropdownRef.current.offsetWidth);
    }
  }, []);
  
  const handleLinkClick = () => {
    // Toggle the visibility of the second dropdown
    setShowSecondDropdown(!showSecondDropdown);
  };
  if (loading) {
    // Add loading indicator or handle loading state
    return <Loader />;
  }

  if (error) {
    // Handle error state
    return <Error404/>;
  }

  return (
    <div className='bg-gray-200 h-80 w-full'>
      <div className="py-8 px-5">
        <h5 className='font-semibold pb-5'> Find Existing Contacts Based on (Primary)</h5>
        <div className="flex  justify-between">
          <div className="flex-1" ref={firstDropdownRef}>
            <Selector
              options={['CSV Header1', 'CSV Header2', 'CSV Header3']} // CSV header options
              onSelect={(selected) => console.log(selected)} // Handle selection
              selectedValue={'Selected CSV Header'} // Selected CSV header value
              placeholder="Select CSV Header" // Placeholder text
            />
          </div>
          <div className="flex-1 text-sky-700 text-left pt-2 px-4">
            <span role="button" onClick={handleLinkClick} tabIndex={0}>
              {showSecondDropdown ? '- Remove Second Preference' : '+ Add Second Preference'}
            </span>
          </div>
        </div>

        {/* Render the second dropdown based on the state */}
        {showSecondDropdown && (
          <div className="mt-5">
            <h5 className='font-semibold pb-2'>Find Existing Contacts Based on (Secondary)</h5>
            <div style={{ width: firstDropdownWidth }}>
              <Selector
                options={['CSV HeaderA', 'CSV HeaderB', 'CSV HeaderC']} // CSV header options
                onSelect={(selected) => console.log(selected)} // Handle selection
                selectedValue={'Selected CSV Header'} // Selected CSV header value
                placeholder="Select CSV Header" // Placeholder text
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page3;



// import React, { useState, useRef, useEffect } from 'react';
// import Selector from '../components/SearchComponent';

// const Page3 = () => {
//   const [showSecondDropdown, setShowSecondDropdown] = useState(false);
//   const [firstDropdownWidth, setFirstDropdownWidth] = useState(null);
//   const firstDropdownRef = useRef(null);

//   useEffect(() => {
//     // Get the width of the first dropdown when it's mounted
//     if (firstDropdownRef.current) {
//       setFirstDropdownWidth(firstDropdownRef.current.offsetWidth);
//     }
//   }, []);

//   const handleLinkClick = () => {
//     // Toggle the visibility of the second dropdown
//     setShowSecondDropdown(!showSecondDropdown);
//   };

//   return (
//     <div className='bg-gray-200 h-80 w-full'>
//       <div className="py-8 px-5">
//         <h5 className='font-semibold pb-5'> Find Existing Contacts Based on (Primary)</h5>
//         <div className="flex  justify-between">
//           <div className="flex-1" ref={firstDropdownRef}>
//             <Selector
//               options={['CSV Header1', 'CSV Header2', 'CSV Header3']} // CSV header options
//               onSelect={(selected) => console.log(selected)} // Handle selection
//               selectedValue={'Selected CSV Header'} // Selected CSV header value
//               placeholder="Select CSV Header" // Placeholder text
//             />
//           </div>
//           <div className="flex-1 text-sky-700 text-left pt-2 px-4">
//             <span role="button" onClick={handleLinkClick} tabIndex={0}>
//               {showSecondDropdown ? '- Remove Second Preference' : '+ Add Second Preference'}
//             </span>
//           </div>
//         </div>

//         {/* Render the second dropdown based on the state */}
//         {showSecondDropdown && (
//           <div className="mt-5">
//             <h5 className='font-semibold pb-2'>Find Existing Contacts Based on (Secondary)</h5>
//             <div style={{ width: firstDropdownWidth }}>
//               <Selector
//                 options={['CSV HeaderA', 'CSV HeaderB', 'CSV HeaderC']} // CSV header options
//                 onSelect={(selected) => console.log(selected)} // Handle selection
//                 selectedValue={'Selected CSV Header'} // Selected CSV header value
//                 placeholder="Select CSV Header" // Placeholder text
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page3;